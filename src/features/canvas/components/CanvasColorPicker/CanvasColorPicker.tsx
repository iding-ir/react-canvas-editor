import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ColorPicker } from "../../../../components/Aside/components/ColorPicker";
import {
  selectCanvasBackgroundColor,
  setCanvasBackgroundColor,
} from "../../canvas-slice";

export const CanvasColorPicker = () => {
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectCanvasBackgroundColor);

  const onChange = (color: string) => {
    dispatch(setCanvasBackgroundColor(color));
  };

  return <ColorPicker color={color} onChange={onChange} />;
};
