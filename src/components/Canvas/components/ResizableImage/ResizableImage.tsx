import Konva from "konva";
import { Image } from "react-konva";

import { useAppSelector } from "../../../../app/hooks";
import { ImageType } from "../../../../features/gallery/photos";
import { selectTool } from "../../../../features/line/line-slice";
import { useResize } from "../../../../hooks/use-resize";

export const ResizableImage = ({
  img,
  image,
  initialWidth,
  initialHeight,
}: {
  img: HTMLImageElement;
  image: ImageType;
  initialWidth: number;
  initialHeight: number;
}) => {
  const { id } = image;
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
        image={img}
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
