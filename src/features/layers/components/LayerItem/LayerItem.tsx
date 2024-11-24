import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CSSProperties } from "react";

import { useAppSelector } from "../../../../app/hooks";
import Icon from "../../../../assets/icons/grip.svg";
import { selectImages } from "../../../gallery";
import { selectLines } from "../../../line";
import { selectTexts } from "../../../text";
import { LayerType } from "../../layers";
import { Thumbnail } from "../Thumbnail";
import styles from "./LayerItem.module.scss";

export const LayerItem = ({ layer }: { layer: LayerType }) => {
  const images = useAppSelector(selectImages);
  const texts = useAppSelector(selectTexts);
  const lines = useAppSelector(selectLines);
  const { id } = layer;

  const {
    isDragging,
    setNodeRef,
    transform,
    transition,
    attributes,
    listeners,
    setActivatorNodeRef,
  } = useSortable({ id });

  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <li className={styles.container} ref={setNodeRef} style={style}>
      <Thumbnail layer={layer} images={images} texts={texts} lines={lines} />

      <div
        className={styles.grip}
        {...attributes}
        {...listeners}
        ref={setActivatorNodeRef}
      >
        <Icon />
      </div>
    </li>
  );
};
