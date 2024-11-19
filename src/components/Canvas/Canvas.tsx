import { Layer, Line, Rect, Stage } from "react-konva";
import styles from "./Canvas.module.scss";
import { useAppSelector } from "../../app/hooks";
import { selectImages } from "../../features/gallery";
import { AsyncImage } from "../AsyncImage";
import {
  selectCanvasBackgroundColor,
  selectCanvasSize,
} from "../../features/canvas";
import { useFreehandDrawing } from "../../hooks/use-free-hand-drawing";

export const Canvas = () => {
  const images = useAppSelector(selectImages);
  const stageSize = useAppSelector(selectCanvasSize);
  const canvasBackgroundColor = useAppSelector(selectCanvasBackgroundColor);
  const canvasSize = useAppSelector(selectCanvasSize);
  const { lines, handleMouseDown, handleMouseMove, handleMouseUp } =
    useFreehandDrawing();

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
        <Rect
          width={canvasSize.width}
          height={canvasSize.height}
          fill={canvasBackgroundColor}
        />
      </Layer>

      <Layer>
        {images.map((image, index) => (
          <AsyncImage image={image} stageSize={stageSize} key={index} />
        ))}
      </Layer>

      <Layer>
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
