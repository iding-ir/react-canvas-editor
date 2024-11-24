import { useAppSelector } from "../../../../app/hooks";
import { selectImages } from "../../../../features/images";
import { LayerType } from "../../../../features/layers";
import { selectLines } from "../../../../features/line";
import { selectTexts } from "../../../../features/text";
import { AsyncImage } from "../AsyncImage";
import { InteractiveLine } from "../InteractiveLine";
import { InteractiveText } from "../InteractiveText";

export const OrderedLayer = ({
  layer,
  canvasWidth,
  canvasHeight,
}: {
  layer: LayerType;
  canvasWidth: number;
  canvasHeight: number;
}) => {
  const images = useAppSelector(selectImages);
  const texts = useAppSelector(selectTexts);
  const lines = useAppSelector(selectLines);
  const { id, type } = layer;

  switch (type) {
    case "image":
      const image = images.find((image) => image.id === id);
      return (
        image && (
          <AsyncImage
            image={image}
            canvasWidth={canvasWidth}
            canvasHeight={canvasHeight}
          />
        )
      );
    case "text":
      const text = texts.find((text) => text.id === id);
      return text && <InteractiveText text={text} />;
    case "line":
      const line = lines.find((line) => line.id === id);
      return line && <InteractiveLine line={line} />;
    default:
      return null;
  }
};
