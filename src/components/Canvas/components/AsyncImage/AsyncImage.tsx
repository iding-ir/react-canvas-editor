import { useEffect, useState } from "react";

import { getImageDisplaySize } from "../../../../methods/get-image-display-size";
import { ResizableImage } from "../ResizableImage/ResizableImage";

export const AsyncImage = ({
  id,
  image,
  canvasWidth,
  canvasHeight,
}: {
  id: string;
  image: string;
  canvasWidth: number;
  canvasHeight: number;
}) => {
  const [htmlElement, setHtmlElement] = useState<HTMLImageElement>();

  const img = new window.Image();
  img.src = image;

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
      id={id}
      image={img}
      initialWidth={width}
      initialHeight={height}
    />
  );
};
