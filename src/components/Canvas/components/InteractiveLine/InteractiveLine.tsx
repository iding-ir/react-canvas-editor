import { Line } from "react-konva";

import { useAppSelector } from "../../../../app/hooks.ts";
import {
  Line as LineType,
  selectTool,
} from "../../../../features/brush/index.ts";

export const InteractiveLine = ({
  id,
  line,
}: {
  id: string;
  line: LineType;
}) => {
  const tool = useAppSelector(selectTool);
  const draggable = !tool;

  return (
    <>
      <Line
        id={id}
        points={line.points}
        stroke={line.color}
        strokeWidth={line.size}
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
