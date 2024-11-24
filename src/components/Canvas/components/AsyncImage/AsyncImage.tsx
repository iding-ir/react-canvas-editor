import { useEffect, useState } from "react";

import { ImageType } from "../../../../features/gallery/photos";
import { getImageDisplaySize } from "../../../../methods/get-image-display-size";
import { ResizableImage } from "../ResizableImage/ResizableImage";

export const AsyncImage = ({
  image,
  canvasWidth,
  canvasHeight,
}: {
  image: ImageType;
  canvasWidth: number;
  canvasHeight: number;
}) => {
  const { src } = image;
  const [htmlElement, setHtmlElement] = useState<HTMLImageElement>();

  const img = new window.Image();
  img.src = src;

  useEffect(() => {
    const handleLoad = () => {
      setHtmlElement(img);
    };

    img.addEventListener("load", handleLoad);

    return () => {
      img.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!htmlElement) {
    return null;
  }

  const { width, height } = getImageDisplaySize(
    htmlElement,
    canvasWidth,
    canvasHeight,
  );

  return (
    <ResizableImage
      img={img}
      image={image}
      initialWidth={width}
      initialHeight={height}
    />
  );
};
