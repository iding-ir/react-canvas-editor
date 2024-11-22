export enum THEMES {
  light = "light",
  dark = "dark",
}

export const DEFAULT_THEME = THEMES.dark;
export const FALLBACK_THEME = THEMES.dark;

export type Theme = keyof typeof THEMES;
