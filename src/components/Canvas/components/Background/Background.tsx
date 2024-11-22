import { Layer, Rect } from "react-konva";

export const Background = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  return (
    <Layer>
      <Rect width={width} height={height} fill={color} />
    </Layer>
  );
};
