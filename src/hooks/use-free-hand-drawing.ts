import { useRef, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { selectTool } from "../features/canvas";
import Konva from "konva";

export const useFreehandDrawing = () => {
  const tool = useAppSelector(selectTool);
  const isDrawing = useRef(false);
  const [lines, setLines] = useState<{ tool: string; points: number[] }[]>([]);

  const handleMouseDown = (event: Konva.KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true;

    const pos = event?.target?.getStage()?.getPointerPosition();

    if (!pos || !tool) {
      return;
    }

    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (event: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = event.target.getStage();
    const point = stage?.getPointerPosition();
    let lastLine = lines[lines.length - 1];

    if (!point || !lastLine) {
      return;
    }

    lastLine.points = lastLine.points.concat([point.x, point.y]);

    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return { lines, handleMouseDown, handleMouseMove, handleMouseUp };
};
