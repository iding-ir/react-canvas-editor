import { Layer } from "react-konva";

import { Text as TextType } from "../../../../features/text";
import { InteractiveText } from "../InteractiveText";

export const Texts = ({ texts }: { texts: TextType[] }) => {
  return (
    <Layer>
      {texts.map((text, i) => (
        <InteractiveText key={i} text={text} />
      ))}
    </Layer>
  );
};
