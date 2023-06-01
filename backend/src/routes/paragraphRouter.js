import { paragraphController } from '../controllers/paragraphController.js';
import express from 'express';

export const paragraphRouter = new express.Router()

paragraphRouter.get('/paragraph/:themeId', paragraphController.get);
paragraphRouter.post('/paragraph', paragraphController.create);
