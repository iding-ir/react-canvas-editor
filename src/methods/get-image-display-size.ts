export const getImageDisplaySize = (
  image: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
) => {
  const resize = 0.5;
  const imageRatio = image.width / image.height;
  const stageRatio = canvasWidth / canvasHeight;

  if (imageRatio > stageRatio) {
    return {
      width: resize * canvasWidth,
      height: (resize * canvasWidth) / imageRatio,
    };
  } else {
    return {
      width: resize * canvasHeight * imageRatio,
      height: resize * canvasHeight,
    };
  }
};
