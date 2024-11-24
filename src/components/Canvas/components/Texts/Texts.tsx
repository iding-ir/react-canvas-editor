import { Layer } from "react-konva";

import { TextType } from "../../../../features/text/text";
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
