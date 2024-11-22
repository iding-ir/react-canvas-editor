import { Layer } from "react-konva";

import { LineType } from "../../../../features/line";
import { InteractiveLine } from "../InteractiveLine";

export const Lines = ({ lines }: { lines: LineType[] }) => {
  return (
    <Layer>
      {lines.map((line, i) => (
        <InteractiveLine key={i} line={line} />
      ))}
    </Layer>
  );
};
