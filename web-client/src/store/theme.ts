import { flow, makeAutoObservable, toJS } from 'mobx';
import { fetchTheme } from '../requests/theme';
import type { ThemeType } from '../types';

class Theme {
  theme: ThemeType | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get getTheme(): ThemeType | null {
    return toJS(this.theme);
  }

  fetchTheme = flow(function * (this: Theme, themeId: number) {
    try {
      this.theme = yield fetchTheme(themeId);
    } catch (err) {
      throw new Error('Failed to fetch theme (level 2).');
    }
  })
}

export default new Theme();
