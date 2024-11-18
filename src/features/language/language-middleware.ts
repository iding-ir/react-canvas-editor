import { createListenerMiddleware } from "@reduxjs/toolkit";

import i18n from "../../localization";
import { Language } from "./language";
import { setLanguage } from "./language-slice";

export const languageListenerMiddleware = createListenerMiddleware();

languageListenerMiddleware.startListening({
  actionCreator: setLanguage,
  effect: async ({ payload }) => {
    changeLanguage(payload);
  },
});

export const changeLanguage = (language: Language) => {
  i18n.changeLanguage(language);
};
