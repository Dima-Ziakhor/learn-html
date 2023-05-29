import { API_THEME } from './apiUrls';
import type { ThemeType } from '../types';

export const fetchTheme = async (id: number): Promise<ThemeType> => {
  try {
    const request = await fetch(API_THEME);
    const response = await request.json();

    return response.find((theme: ThemeType) => theme.id === id);
  } catch (err) {
    throw new Error('Failed to fetch theme (level 1).');
  }
};
