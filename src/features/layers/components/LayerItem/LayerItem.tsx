import { useAppSelector } from "../../../../app/hooks";
import { selectImages } from "../../../gallery";
import { selectLines } from "../../../line";
import { selectTexts } from "../../../text";
import { LayerType } from "../../layers";
import { Thumbnail } from "../Thumbnail";

export const LayerItem = ({ layer }: { layer: LayerType }) => {
  const images = useAppSelector(selectImages);
  const texts = useAppSelector(selectTexts);
  const lines = useAppSelector(selectLines);

  return (
    <li>
      <Thumbnail layer={layer} images={images} texts={texts} lines={lines} />
    </li>
  );
};
