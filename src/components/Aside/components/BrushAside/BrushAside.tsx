import { BrushColorPicker } from "../../../../features/brush/components/BrushColorPicker";
import { BrushSizeSelector } from "../../../../features/brush/components/BrushSizeSelector";
import asideStyles from "../Aside.module.scss";

export const BrushAside = () => {
  return (
    <div className={asideStyles.container}>
      <BrushSizeSelector />

      <BrushColorPicker />
    </div>
  );
};
