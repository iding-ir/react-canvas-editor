import { useAppSelector } from "../../../../app/hooks";
import { selectCanvasHeight, selectCanvasWidth } from "../../../canvas";
import { ImageType } from "../../../gallery/gallery";
import { LineType } from "../../../line/line";
import { TextType } from "../../../text/text";
import { LayerType } from "../../layers";
import { ImageThumbnail } from "./components/ImageThumbnail";
import { LineThumbnail } from "./components/LineThumbnail";
import { TextThumbnail } from "./components/TextThumbnail";

export const Thumbnail = ({
  layer,
  images,
  texts,
  lines,
}: {
  layer: LayerType;
  images: ImageType[];
  texts: TextType[];
  lines: LineType[];
}) => {
  const width = useAppSelector(selectCanvasWidth);
  const height = useAppSelector(selectCanvasHeight);
  const image = images.find((image) => image.id === layer.id);
  const text = texts.find((text) => text.id === layer.id);
  const line = lines.find((line) => line.id === layer.id);

  return (
    <>
      {image && <ImageThumbnail image={image} width={width} height={height} />}

      {text && <TextThumbnail text={text} width={width} height={height} />}

      {line && <LineThumbnail line={line} width={width} height={height} />}
    </>
  );
};
