import { useEffect, useState } from "react";
import { getImageDisplaySize } from "../../methods/get-image-display-size";
import { Image } from "react-konva";

export const AsyncImage = ({
  image,
  canvasWidth,
  canvasHeight,
}: {
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

  const displaySize = getImageDisplaySize(
    htmlElement,
    canvasWidth,
    canvasHeight
  );

  return (
    <Image image={img} width={displaySize.width} height={displaySize.height} />
  );
};
