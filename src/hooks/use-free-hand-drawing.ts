import Konva from "konva";
import { useRef } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addLine,
  addPoint,
  selectBrushColor,
  selectBrushSize,
  selectTool,
} from "../features/brush";

export const useFreehandDrawing = () => {
  const dispatch = useAppDispatch();
  const tool = useAppSelector(selectTool);
  const size = useAppSelector(selectBrushSize);
  const color = useAppSelector(selectBrushColor);
  const isDrawing = useRef(false);

  const handleMouseDown = (
    event: Konva.KonvaEventObject<MouseEvent | TouchEvent>,
  ) => {
    if (!tool) {
      return;
    }

    isDrawing.current = true;
    const position = event?.target?.getStage()?.getPointerPosition();

    if (!position) {
      return;
    }

    dispatch(addLine({ size, color, tool, points: [position.x, position.y] }));
  };

  const handleMouseMove = (
    event: Konva.KonvaEventObject<MouseEvent | TouchEvent>,
  ) => {
    if (!tool || !isDrawing.current) {
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
    if (!tool) {
      return;
    }

    isDrawing.current = false;
  };

  return { handleMouseDown, handleMouseMove, handleMouseUp };
};
