import { TextColorPicker } from "../../../../features/text/components/TextColorPicker";
import { TextInput } from "../../../../features/text/components/TextInput";
import { TextSizeSelector } from "../../../../features/text/components/TextSizeSelector";
import asideStyles from "../Aside.module.scss";

export const TextAside = () => {
  return (
    <div className={asideStyles.container}>
      <TextInput />

      <TextSizeSelector />

      <TextColorPicker />
    </div>
  );
};
