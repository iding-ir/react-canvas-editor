import { Layer, Line, Stage } from "react-konva";
import styles from "./Canvas.module.scss";
import { useAppSelector } from "../../app/hooks";
import { selectImages } from "../../features/gallery";
import { AsyncImage } from "../AsyncImage";
import { selectCanvasSize } from "../../features/canvas";
import { useFreehandDrawing } from "../../hooks/use-free-hand-drawing";

export const Canvas = () => {
  const images = useAppSelector(selectImages);
  const stageSize = useAppSelector(selectCanvasSize);
  const { lines, handleMouseDown, handleMouseMove, handleMouseUp } =
    useFreehandDrawing();

  console.log(lines);

  return (
    <Stage
      className={styles.container}
      width={stageSize.width}
      height={stageSize.height}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
    >
      <Layer>
        {images.map((image, index) => (
          <AsyncImage image={image} stageSize={stageSize} key={index} />
        ))}

        {lines.map((line, i) => (
          <Line
            key={i}
            points={line.points}
            stroke="#df4b26"
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
            globalCompositeOperation={
              line.tool === "eraser" ? "destination-out" : "source-over"
            }
          />
        ))}
      </Layer>
    </Stage>
  );
};
