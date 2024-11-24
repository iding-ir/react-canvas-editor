import Konva from "konva";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addLine,
  addPoint,
  selectLineColor,
  selectLineSize,
  selectTool,
} from "../features/lines";

export const useFreehandDrawing = () => {
  const dispatch = useAppDispatch();
  const tool = useAppSelector(selectTool);
  const size = useAppSelector(selectLineSize);
  const color = useAppSelector(selectLineColor);
  const isDrawing = useRef(false);

  const handleStart = (
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

    dispatch(
      addLine({
        id: uuidv4(),
        size,
        color,
        tool,
        points: [position.x, position.y],
      }),
    );
  };

  const handleMove = (
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

  const handleEnd = () => {
    if (!tool) {
      return;
    }

    isDrawing.current = false;
  };

  return { handleStart, handleMove, handleEnd };
};
