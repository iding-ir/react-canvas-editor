import Konva from "konva";
import { Image } from "react-konva";

import { useAppSelector } from "../../../../app/hooks.ts";
import { selectTool } from "../../../../features/brush/brush-slice.ts";
import { useResize } from "../../../../hooks/use-resize.tsx";

export const ResizableImage = ({
  id,
  image,
  initialWidth,
  initialHeight,
}: {
  id: string;
  image: HTMLImageElement;
  initialWidth: number;
  initialHeight: number;
}) => {
  const tool = useAppSelector(selectTool);
  const draggable = !tool;
  const {
    x,
    y,
    width,
    height,
    itemRef,
    Transform,
    onSelect,
    onDragEnd,
    onTransformEnd,
  } = useResize<Konva.Image>({ id, initialWidth, initialHeight });

  return (
    <>
      <Image
        id={id}
        ref={itemRef}
        image={image}
        x={x}
        y={y}
        width={width}
        height={height}
        draggable={draggable}
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
      />

      {Transform}
    </>
  );
};
