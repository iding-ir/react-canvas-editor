import { Layer, Line, Stage } from "react-konva";

import { LineType } from "../../../../../line/line";
import styles from "../../Thumbnail.module.scss";

export const LineThumbnail = ({
  width,
  height,
  line,
}: {
  width: number;
  height: number;
  line: LineType;
}) => {
  const { points, size, color } = line;

  return (
    <Stage className={styles.container} width={width} height={height}>
      <Layer>
        <Line
          width={width}
          height={height}
          points={points}
          stroke={color}
          strokeWidth={size}
          tension={0.5}
          lineCap="round"
          lineJoin="round"
          globalCompositeOperation="source-over"
        />
      </Layer>
    </Stage>
  );
};
