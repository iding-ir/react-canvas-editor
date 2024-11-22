import { LineColorPicker } from "../../../../features/line/components/LineColorPicker";
import { LineSizeSelector } from "../../../../features/line/components/LineSizeSelector";
import asideStyles from "../Aside.module.scss";

export const LineAside = () => {
  return (
    <div className={asideStyles.container}>
      <LineSizeSelector />

      <LineColorPicker />
    </div>
  );
};
