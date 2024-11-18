import { useEffect, useState } from "react";
import { getImageDisplaySize } from "../../methods/get-image-display-size";
import { Image } from "react-konva";
import { Size } from "../../types";

export const AsyncImage = ({
  image,
  stageSize,
}: {
  image: string;
  stageSize: Size;
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

  const displaySize = getImageDisplaySize(htmlElement, stageSize);

  return (
    <Image image={img} width={displaySize.width} height={displaySize.height} />
  );
};
