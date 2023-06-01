import { flow, makeAutoObservable, toJS } from 'mobx';
import { fetchTheme, fetchParagraphs } from '../requests/theme';
import type { ThemeType, NormalizedTheme, Paragraph } from '../types';

class Theme {
  theme: NormalizedTheme | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get getTheme(): NormalizedTheme | null {
    return toJS(this.theme);
  }

  fetchTheme = flow(function * (this: Theme, themeId: number) {
    if (!themeId) {
      return;
    }

    try {
      const theme = yield fetchTheme(themeId);
      const paragraphs = yield fetchParagraphs(themeId);

      const { id, title, image }: Pick<ThemeType, 'id' | 'title' | 'image'> = theme;
      const normalizedParagraphs = paragraphs.map((par: Paragraph) => (par.text));

      this.theme = {
        id,
        title,
        image,
        paragraphs: normalizedParagraphs
      };
    } catch (err) {
      throw new Error('Failed to fetch theme (level 2).');
    }
  })
}

export default new Theme();
