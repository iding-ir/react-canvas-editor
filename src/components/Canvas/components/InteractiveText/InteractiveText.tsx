import { Text } from "react-konva";

import { useAppSelector } from "../../../../app/hooks";
import { selectTool } from "../../../../features/lines/lines-slice";
import { TextType } from "../../../../features/texts/texts";

export const InteractiveText = ({ text }: { text: TextType }) => {
  const { id, content, size, color } = text;
  const tool = useAppSelector(selectTool);
  const draggable = !tool;

  return (
    <>
      <Text
        id={id}
        text={content}
        fontSize={size}
        fill={color}
        draggable={draggable}
      />
    </>
  );
};
