import Konva from "konva";
import { useEffect, useRef, useState } from "react";
import { Transformer } from "react-konva";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectCanvasSelectedItem,
  setCanvasSelectedItem,
} from "../features/canvas";
import { selectTool } from "../features/lines";

export const useResize = <T extends Konva.Image | Konva.Text | Konva.Line>({
  id,
  initialWidth,
  initialHeight,
}: {
  id: string;
  initialWidth?: number;
  initialHeight?: number;
}) => {
  const dispatch = useAppDispatch();
  const itemRef = useRef<T>(null);
  const transformRef = useRef<Konva.Transformer>(null);
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const canvasSelectedItem = useAppSelector(selectCanvasSelectedItem);
  const tool = useAppSelector(selectTool);
  const enabled = !tool;
  const transformable = canvasSelectedItem === id && enabled;

  const onDragEnd = (event: Konva.KonvaEventObject<DragEvent>) => {
    setX(event.target.x());
    setY(event.target.y());
  };

  const onTransformEnd = () => {
    const node = itemRef.current;

    if (!node) {
      return;
    }

    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    node.scaleX(1);
    node.scaleY(1);

    setX(node.x());
    setY(node.y());
    setWidth(Math.max(5, node.width() * scaleX));
    setHeight(Math.max(5, node.height() * scaleY));
  };

  useEffect(() => {
    if (!itemRef.current || !transformRef.current) {
      return;
    }

    transformRef.current.nodes([itemRef.current]);
    transformRef.current?.getLayer()?.batchDraw();
  }, [canvasSelectedItem]);

  const onSelect = () => {
    if (!enabled) {
      return;
    }

    dispatch(setCanvasSelectedItem(id));
  };

  const Transform = transformable && (
    <Transformer
      ref={transformRef}
      flipEnabled={false}
      boundBoxFunc={(oldBox, newBox) => {
        if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
          return oldBox;
        }

        return newBox;
      }}
    />
  );

  return {
    x,
    y,
    width,
    height,
    itemRef,
    Transform,
    onSelect,
    onDragEnd,
    onTransformEnd,
  };
};
