import { API_THEME, API_PARAGRAPHS, API_TAGS } from './apiUrls';
import type { ThemeType, Paragraph, TagType } from '../types';

export const fetchTheme = async (id: number): Promise<ThemeType> => {
  try {
    const request = await fetch(`${API_THEME}${id}`);

    return await request.json();
  } catch (err) {
    throw new Error('Failed to fetch theme (level 1).');
  }
};

export const fetchParagraphs = async (themeId: number): Promise<Paragraph> => {
  try {
    const request = await fetch(`${API_PARAGRAPHS}${themeId}`);

    return await request.json();
  } catch (err) {
    throw new Error('Failed to fetch paragraphs (level 1).');
  }
}

export const fetchTags = async (): Promise<TagType[]> => {
  try {
    const request = await fetch(API_TAGS);

    return await request.json();
  } catch (err) {
    throw new Error('Failed to fetch tags');
  }
};
