import { useEffect } from "react";

import { useAppSelector } from "../app/hooks";
import { selectLanguage } from "../features/language";
import { changeLanguage } from "../features/language/language-middleware";
import { selectSize } from "../features/size";
import { changeSize } from "../features/size/size-middleware";
import { selectTheme } from "../features/theme";
import { changeTheme } from "../features/theme/theme-middleware";

export const usePersist = () => {
  const language = useAppSelector(selectLanguage);
  const theme = useAppSelector(selectTheme);
  const size = useAppSelector(selectSize);

  useEffect(() => {
    changeLanguage(language);
    changeTheme(theme);
    changeSize(size);
  }, []);
};
