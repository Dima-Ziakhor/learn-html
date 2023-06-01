import { paragraphController } from '../controllers/paragraphController.js';
import express from 'express';

export const paragraphRouter = new express.Router()

paragraphRouter.get('/paragraph/:paragraphId', paragraphController.get);
paragraphRouter.post('/paragraph', paragraphController.create);
