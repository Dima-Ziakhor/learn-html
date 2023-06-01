import { Theme } from '../models/Theme.js';

async function get (req, res, next) {
  const { themeId } = req.params;

  if (!Number(themeId)) {
    res.sendStatus(422);
    return;
  }

  const theme = await Theme.findOne({
    where: {
      id: themeId
    }
  });

  if (!theme) {
    res.sendStatus(404);
    return;
  }

  res.send(theme);
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
