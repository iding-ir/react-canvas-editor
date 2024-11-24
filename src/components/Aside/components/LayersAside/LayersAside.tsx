import { LayerItems } from "../../../../features/layers/components/LayerItems";
import asideStyles from "../Aside.module.scss";

export const LayerAside = () => {
  return (
    <div className={asideStyles.container}>
      <LayerItems />
    </div>
  );
};
