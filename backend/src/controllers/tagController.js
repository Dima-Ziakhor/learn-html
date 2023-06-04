import { Tag } from '../models/Tag.js';

async function get(req, res, next) {

}

async function getAll(req, res, next) {
  const tags = await Tag.findAll();

  if (!tags.length) {
    res.sendStatus(404);
    return;
  }

  res.send(tags);
}

async function create(req, res, next) {
  const { name, description } = req.body;

  console.log(name, description);

  if (!name || !description) {
    res.sendStatus(422);
    return;
  }

  const tag = await Tag.create({
    name,
    description
  });

  res.send(tag);
}

export const tagController = {
  get,
  getAll,
  create
};
