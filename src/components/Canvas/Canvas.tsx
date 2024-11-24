import { Layer, Stage } from "react-konva";

import { useAppSelector } from "../../app/hooks";
import {
  selectCanvasBackgroundColor,
  selectCanvasHeight,
  selectCanvasWidth,
} from "../../features/canvas";
import { selectLayers } from "../../features/layers";
import { useExportContext } from "../../hooks/use-export";
import { useFreehandDrawing } from "../../hooks/use-free-hand-drawing";
import styles from "./Canvas.module.scss";
import { Background } from "./components/Background";
import { OrderedLayer } from "./components/OrderedLayer/OrderedLayer";

export const Canvas = () => {
  const layers = useAppSelector(selectLayers);
  const canvasWidth = useAppSelector(selectCanvasWidth);
  const canvasHeight = useAppSelector(selectCanvasHeight);
  const canvasBackgroundColor = useAppSelector(selectCanvasBackgroundColor);
  const { handleStart, handleMove, handleEnd } = useFreehandDrawing();
  const { stageRef } = useExportContext();

  return (
    <Stage
      id="stage"
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

      {layers.map((layer) => (
        <Layer key={layer.id}>
          <OrderedLayer
            layer={layer}
            canvasWidth={canvasWidth}
            canvasHeight={canvasHeight}
          />
        </Layer>
      ))}
    </Stage>
  );
};
