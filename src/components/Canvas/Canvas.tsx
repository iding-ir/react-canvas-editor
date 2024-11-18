import { Layer, Stage } from "react-konva";
import styles from "./Canvas.module.scss";
import { useAppSelector } from "../../app/hooks";
import { selectImages } from "../../features/gallery";
import { AsyncImage } from "../AsyncImage";
import { selectCanvasSize } from "../../features/canvas";

export const Canvas = () => {
  const images = useAppSelector(selectImages);
  const stageSize = useAppSelector(selectCanvasSize);

  return (
    <Stage
      className={styles.container}
      width={stageSize.width}
      height={stageSize.height}
    >
      <Layer>
        {images.map((image, index) => (
          <AsyncImage image={image} stageSize={stageSize} key={index} />
        ))}
      </Layer>
    </Stage>
  );
};
