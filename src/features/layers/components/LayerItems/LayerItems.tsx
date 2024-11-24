import {
  Active,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  PointerSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectLayers, setLayers } from "../../layers-slice";
import { LayerItem } from "../LayerItem";
import styles from "./LayerItems.module.scss";

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.4",
      },
    },
  }),
};

export const LayerItems = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<Active | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));
  const layers = useAppSelector(selectLayers);

  const activeItem = useMemo(
    () => layers.find(({ id }) => id === active?.id),
    [active, layers],
  );

  const onDragStart = (event: DragStartEvent) => {
    const { active } = event;

    setActive(active);
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActive(null);

    if (!over || active.id === over.id) {
      return;
    }

    const activeIndex = layers.findIndex(({ id }) => id === active.id);
    const overIndex = layers.findIndex(({ id }) => id === over.id);

    dispatch(setLayers(arrayMove(layers, activeIndex, overIndex)));
  };

  const onDragCancel = () => {
    setActive(null);
  };

  if (!layers.length) {
    return <div className={styles.container}>{t("layers.notFound")}</div>;
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
    >
      <SortableContext items={layers}>
        <ul className={styles.container}>
          {layers.map((layer) => (
            <LayerItem key={layer.id} layer={layer} />
          ))}
        </ul>
      </SortableContext>

      <DragOverlay dropAnimation={dropAnimationConfig}>
        {activeItem && <LayerItem layer={activeItem} />}
      </DragOverlay>
    </DndContext>
  );
};
