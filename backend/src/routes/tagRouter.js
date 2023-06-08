import { tagController } from '../controllers/tagController.js';
import express from 'express';

export const tagRouter = new express.Router()

tagRouter.get('/tags/:params', tagController.getByParam);
tagRouter.get('/tags', tagController.getAll);
tagRouter.post('/tags', tagController.create);
