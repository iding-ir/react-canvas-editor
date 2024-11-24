import { Line } from "react-konva";

import { useAppSelector } from "../../../../app/hooks";
import { LineType } from "../../../../features/lines/lines";
import { selectTool } from "../../../../features/lines/lines-slice";

export const InteractiveLine = ({ line }: { line: LineType }) => {
  const { id, size, color, points } = line;
  const tool = useAppSelector(selectTool);
  const draggable = !tool;

  return (
    <>
      <Line
        id={id}
        points={points}
        stroke={color}
        strokeWidth={size}
        tension={0.5}
        lineCap="round"
        lineJoin="round"
        draggable={draggable}
        globalCompositeOperation={
          line.tool === "eraser" ? "destination-out" : "source-over"
        }
      />
    </>
  );
};
