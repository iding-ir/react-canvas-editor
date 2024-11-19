import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import {
  DEFAULT_LANGUAGE,
  FALLBACK_LANGUAGE,
  LANGUAGES,
} from "../features/language";
import en from "./en.json";
import nl from "./nl.json";

i18n.use(initReactI18next).init({
  resources: {
    [LANGUAGES.en]: {
      translation: en,
    },
    [LANGUAGES.nl]: {
      translation: nl,
    },
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: FALLBACK_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
