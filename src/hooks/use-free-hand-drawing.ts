import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Konva from "konva";
import {
  addLine,
  addPoint,
  selectBrushColor,
  selectBrushSize,
} from "../features/brush";
import { selectTool } from "../features/tool";

export const useFreehandDrawing = () => {
  const dispatch = useAppDispatch();
  const tool = useAppSelector(selectTool);
  const size = useAppSelector(selectBrushSize);
  const color = useAppSelector(selectBrushColor);
  const isDrawing = useRef(false);

  const handleMouseDown = (event: Konva.KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true;

    const pos = event?.target?.getStage()?.getPointerPosition();

    if (!pos || !tool) {
      return;
    }

    dispatch(addLine({ size, color, tool, points: [pos.x, pos.y] }));
  };

  const handleMouseMove = (event: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = event.target.getStage();
    const point = stage?.getPointerPosition();

    if (!point) {
      return;
    }

    dispatch(addPoint([point.x, point.y]));
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return { handleMouseDown, handleMouseMove, handleMouseUp };
};
