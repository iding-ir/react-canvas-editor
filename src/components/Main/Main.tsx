import { Circle, Layer, Rect, Stage } from "react-konva";
import styles from "./Main.module.scss";

export type Size = {
  width: number;
  height: number;
};

export type Sizes = {
  [key: string]: Size;
};

export const sizes: Sizes = {
  sm: { width: 320, height: 240 },
  md: { width: 640, height: 480 },
  lg: { width: 800, height: 600 },
};

export const Main = () => {
  return (
    <div className={styles.container}>
      <Stage width={sizes.md.width} height={sizes.md.height}>
        <Layer>
          <Rect width={50} height={50} fill="red" />
          <Circle x={200} y={200} stroke="black" radius={50} />
        </Layer>
      </Stage>
    </div>
  );
};
