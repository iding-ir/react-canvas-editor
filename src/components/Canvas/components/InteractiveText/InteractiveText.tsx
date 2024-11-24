import { Text } from "react-konva";

import { useAppSelector } from "../../../../app/hooks";
import { selectTool } from "../../../../features/line/line-slice";
import { TextType } from "../../../../features/text/text";

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
