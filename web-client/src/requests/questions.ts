import { API_QUESTIONS } from './apiUrls';
import type { QuestionType } from '../types';

export const fetchQuestions = async (): Promise<QuestionType[]> => {
  try {
    const request = await fetch(API_QUESTIONS);
    const response = await request.json();

    return response;
  } catch (err) {
    throw new Error('Failed to fetch questions.');
  }
};
