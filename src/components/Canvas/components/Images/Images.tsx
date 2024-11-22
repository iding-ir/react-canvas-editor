import { Layer } from "react-konva";

import { AsyncImage } from "../AsyncImage";

export const Images = ({
  images,
  canvasWidth,
  canvasHeight,
}: {
  images: string[];
  canvasWidth: number;
  canvasHeight: number;
}) => {
  return (
    <Layer>
      {images.map((image, index) => (
        <AsyncImage
          id={`image-${index}`}
          image={image}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          key={index}
        />
      ))}
    </Layer>
  );
};
