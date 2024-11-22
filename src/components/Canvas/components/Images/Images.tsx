import { Layer } from "react-konva";

import { ImageType } from "../../../../features/gallery";
import { AsyncImage } from "../AsyncImage";

export const Images = ({
  images,
  canvasWidth,
  canvasHeight,
}: {
  images: ImageType[];
  canvasWidth: number;
  canvasHeight: number;
}) => {
  return (
    <Layer>
      {images.map((image, index) => (
        <AsyncImage
          image={image}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          key={index}
        />
      ))}
    </Layer>
  );
};
