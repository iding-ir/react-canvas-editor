import { CanvasColorPicker } from "../../../../features/canvas/components/CanvasColorPicker";
import { CanvasName } from "../../../../features/canvas/components/CanvasName";
import { CanvasSizeSelector } from "../../../../features/canvas/components/CanvasSizeSelector";
import asideStyles from "../Aside.module.scss";

export const CanvasAside = () => {
  return (
    <div className={asideStyles.container}>
      <CanvasName />

      <CanvasSizeSelector />

      <CanvasColorPicker />
    </div>
  );
};
