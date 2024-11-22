import { Text } from "react-konva";

import { useAppSelector } from "../../../../app/hooks.ts";
import { selectTool } from "../../../../features/brush/brush-slice.ts";
import { Text as TextType } from "../../../../features/text/index.ts";

export const InteractiveText = ({
  id,
  text,
}: {
  id?: string;
  text: TextType;
}) => {
  const tool = useAppSelector(selectTool);
  const draggable = !tool;

  return (
    <>
      <Text
        id={id}
        text={text.text}
        textSize={text.size}
        fill={text.color}
        draggable={draggable}
      />
    </>
  );
};
