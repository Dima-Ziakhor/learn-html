import { Theme } from '../models/Theme.js';

async function get (req, res, next) {
  const { themeId } = req.params;

  console.log('Get theme: ', themeId);

  res.send(`Get theme: ${themeId}`)
}

async function create (req, res, next) {
  const { image, title } = req.body;
  const theme = await Theme.create({
    image,
    title
  });

  res.send(theme);
}

export const themeController = {
  get,
  create
}
