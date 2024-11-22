import { Stage } from "react-konva";

import { useAppSelector } from "../../app/hooks";
import {
  selectCanvasBackgroundColor,
  selectCanvasHeight,
  selectCanvasWidth,
} from "../../features/canvas";
import { selectImages } from "../../features/gallery";
import { selectLines } from "../../features/line";
import { selectTexts } from "../../features/text";
import { useExportContext } from "../../hooks/use-export";
import { useFreehandDrawing } from "../../hooks/use-free-hand-drawing";
import styles from "./Canvas.module.scss";
import { Background } from "./components/Background";
import { Images } from "./components/Images";
import { Lines } from "./components/Lines";
import { Texts } from "./components/Texts";

export const Canvas = () => {
  const images = useAppSelector(selectImages);
  const canvasWidth = useAppSelector(selectCanvasWidth);
  const canvasHeight = useAppSelector(selectCanvasHeight);
  const canvasBackgroundColor = useAppSelector(selectCanvasBackgroundColor);
  const texts = useAppSelector(selectTexts);
  const lines = useAppSelector(selectLines);
  const { handleStart, handleMove, handleEnd } = useFreehandDrawing();
  const { stageRef } = useExportContext();

  return (
    <Stage
      ref={stageRef}
      className={styles.container}
      width={canvasWidth}
      height={canvasHeight}
      onTouchStart={handleStart}
      onMouseDown={handleStart}
      onMousemove={handleMove}
      onMouseup={handleEnd}
    >
      <Background
        width={canvasWidth}
        height={canvasHeight}
        color={canvasBackgroundColor}
      />

      <Images
        images={images}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
      />

      <Texts texts={texts} />

      <Lines lines={lines} />
    </Stage>
  );
};
