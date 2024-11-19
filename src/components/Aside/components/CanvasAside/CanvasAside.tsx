import { CanvasColorPicker } from "../../../../features/canvas/components/CanvasColorPicker";
import { CanvasSizeSelector } from "../../../../features/canvas/components/CanvasSizeSelector";
import asideStyles from "../Aside.module.scss";

export const CanvasAside = () => {
  return (
    <div className={asideStyles.container}>
      <CanvasSizeSelector />

      <CanvasColorPicker />
    </div>
  );
};
