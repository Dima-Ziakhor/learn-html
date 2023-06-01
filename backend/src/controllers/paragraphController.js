import { Paragraph } from '../models/Paragraph.js';

async function get (req, res, next) {
  const { themeId } = req.params;

  if (!Number(themeId)) {
    res.sendStatus(422);
    return;
  }

  const paragraphs = await Paragraph.findAll({
    where: {
      themeId
    },
    order: [
      ['order', 'ASC']
    ]
  });

  if (!paragraphs.length) {
    res.sendStatus(404);
    return;
  }

  res.send(paragraphs);
}

async function create (req, res, next) {
  const { text, themeId, order } = req.body;
  const paragraph = await Paragraph.create({
    text,
    themeId,
    order
  });

  res.send(paragraph);
}

export const paragraphController = {
  get,
  create
}
