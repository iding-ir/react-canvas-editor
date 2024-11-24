import { useEffect, useState } from "react";
import { Image, Layer, Stage } from "react-konva";

import { ImageType } from "../../../../../gallery/gallery";
import styles from "../../Thumbnail.module.scss";

export const ImageThumbnail = ({
  width,
  height,
  image,
}: {
  width: number;
  height: number;
  image: ImageType;
}) => {
  const [htmlElement, setHtmlElement] = useState<HTMLImageElement>();

  const img = new window.Image();
  img.src = image.src;

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

  return (
    <Stage className={styles.container} width={width} height={height}>
      <Layer>
        <Image image={img} width={width} height={height} />
      </Layer>
    </Stage>
  );
};
