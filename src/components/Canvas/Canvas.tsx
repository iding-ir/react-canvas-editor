import { Layer, Line, Rect, Stage, Text } from "react-konva";
import styles from "./Canvas.module.scss";
import { useAppSelector } from "../../app/hooks";
import { selectImages } from "../../features/gallery";
import { AsyncImage } from "../AsyncImage";
import {
  selectCanvasBackgroundColor,
  selectCanvasHeight,
  selectCanvasWidth,
} from "../../features/canvas";
import { useFreehandDrawing } from "../../hooks/use-free-hand-drawing";
import { selectTexts } from "../../features/text";
import { selectLines } from "../../features/brush";

export const Canvas = () => {
  const images = useAppSelector(selectImages);
  const canvasWidth = useAppSelector(selectCanvasWidth);
  const canvasHeight = useAppSelector(selectCanvasHeight);
  const canvasBackgroundColor = useAppSelector(selectCanvasBackgroundColor);
  const texts = useAppSelector(selectTexts);
  const lines = useAppSelector(selectLines);
  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    useFreehandDrawing();

  return (
    <Stage
      className={styles.container}
      width={canvasWidth}
      height={canvasHeight}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
    >
      <Layer>
        <Rect
          width={canvasWidth}
          height={canvasHeight}
          fill={canvasBackgroundColor}
        />
      </Layer>

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

      <Layer>
        {lines.map((line, i) => (
          <Line
            key={i}
            points={line.points}
            stroke={line.color}
            strokeWidth={line.size}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
            globalCompositeOperation={
              line.tool === "eraser" ? "destination-out" : "source-over"
            }
          />
        ))}
      </Layer>

      <Layer>
        {texts.map((text, i) => (
          <Text
            key={i}
            text={text.text}
            textSize={text.size}
            fill={text.color}
          />
        ))}
      </Layer>
    </Stage>
  );
};
