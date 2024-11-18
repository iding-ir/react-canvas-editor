import { Size } from "../constants/stage";

export const getImageDisplaySize = (
  image: HTMLImageElement,
  stageSize: Size
) => {
  const resize = 0.5;
  const imageRatio = image.width / image.height;
  const stageRatio = stageSize.width / stageSize.height;

  if (imageRatio > stageRatio) {
    return {
      width: resize * stageSize.width,
      height: (resize * stageSize.width) / imageRatio,
    };
  } else {
    return {
      width: resize * stageSize.height * imageRatio,
      height: resize * stageSize.height,
    };
  }
};
