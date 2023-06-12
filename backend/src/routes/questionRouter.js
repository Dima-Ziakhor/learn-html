import { questionController } from '../controllers/questionController.js';
import express from 'express';

export const questionRouter = new express.Router();

questionRouter.post('/question', questionController.postQuestion);
questionRouter.get('/question/:id', questionController.getQuestion);
questionRouter.get('/question-test', questionController.getQuestionsArrayForTest);
