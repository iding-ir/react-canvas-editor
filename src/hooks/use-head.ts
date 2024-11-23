import { useAppSelector } from "../app/hooks";
import { selectCanvasName } from "../features/canvas";

export const useHead = () => {
  const canvasName = useAppSelector(selectCanvasName);

  const appName = import.meta.env.VITE_DEFAULT_TITLE;
  const title = canvasName ? `${appName}: ${canvasName}` : appName;
  const description = import.meta.env.VITE_DEFAULT_DESCRIPTION;

  return { appName, title, description };
};
