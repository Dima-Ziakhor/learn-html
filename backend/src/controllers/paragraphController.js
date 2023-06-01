import { Paragraph } from '../models/Paragraph.js';

async function get (req, res, next) {
  const { paragraphId } = req.params;

  console.log('Get paragraph: ', paragraphId);

  res.send(`Get paragraph: ${paragraphId}`)
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
