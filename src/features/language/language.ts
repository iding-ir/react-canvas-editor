export enum LANGUAGES {
  en = "en",
  nl = "nl",
}

export const DEFAULT_LANGUAGE = LANGUAGES.en;
export const FALLBACK_LANGUAGE = LANGUAGES.en;

export type Language = keyof typeof LANGUAGES;
