import type { TagType } from '../types';
import { API_TAGS } from './apiUrls';

export const fetchTags = async (): Promise<TagType[]> => {
  try {
    const request = await fetch(API_TAGS);

    return await request.json();
  } catch (err) {
    throw new Error('Failed to fetch tags');
  }
};

export const fetchTagsByParam = async (param: string): Promise<TagType[]> => {
  try {
    const request = await fetch(`${API_TAGS}${param}`);

    return await request.json();
  } catch (err) {
    throw new Error('Failed to fetch tags');
  }
};
