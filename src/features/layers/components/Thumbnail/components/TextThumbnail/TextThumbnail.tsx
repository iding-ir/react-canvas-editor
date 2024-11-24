import { Layer, Stage, Text } from "react-konva";

import { TextType } from "../../../../../texts/texts";
import styles from "../../Thumbnail.module.scss";

export const TextThumbnail = ({
  width,
  height,
  text,
}: {
  width: number;
  height: number;
  text: TextType;
}) => {
  const { content, size, color } = text;

  return (
    <Stage className={styles.container} width={width} height={height}>
      <Layer>
        <Text
          width={width}
          height={height}
          text={content}
          fontSize={size}
          fill={color}
        />
      </Layer>
    </Stage>
  );
};
