import { useAppSelector } from "../../../../app/hooks";
import { selectLayers } from "../../layers-slice";
import { LayerItem } from "../LayerItem";
import styles from "./LayerItems.module.scss";

export const LayerItems = () => {
  const layers = useAppSelector(selectLayers);

  return (
    <ul className={styles.container}>
      {layers.map((layer) => (
        <LayerItem key={layer.id} layer={layer} />
      ))}
    </ul>
  );
};
