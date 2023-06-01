import { themeController } from '../controllers/themeController.js';
import express from 'express';

export const themeRouter = new express.Router()

themeRouter.get('/theme/:themeId', themeController.get);
themeRouter.post('/theme', themeController.create);
