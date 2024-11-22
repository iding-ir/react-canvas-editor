import { Layer } from "react-konva";

import { Line as LineType } from "../../../../features/brush";
import { InteractiveLine } from "../InteractiveLine";

export const Lines = ({ lines }: { lines: LineType[] }) => {
  return (
    <Layer>
      {lines.map((line, i) => (
        <InteractiveLine key={i} id={`line-${i}`} line={line} />
      ))}
    </Layer>
  );
};
