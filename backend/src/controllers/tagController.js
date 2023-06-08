import { Tag } from '../models/Tag.js';

async function getByParam(req, res, next) {
  const { params } = req.params;

  if (!params) {
    res.send(422);
    return;
  }

  const tags = await Tag.findAll();
  const tagsFiltered = tags.filter(tag => tag.name.includes(params));

  if (!tagsFiltered.length) {
    res.sendStatus(404);
    return;
  }

  res.send(tagsFiltered);
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
  getByParam,
  getAll,
  create
};
