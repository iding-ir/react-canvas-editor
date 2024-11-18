import { useAppSelector } from "../../app/hooks";
import { CanvasSizeSelector } from "../../features/canvas/components/CanvasSizeSelector";
import { hasImages } from "../../features/gallery";
import { Canvas } from "../Canvas";
import { Gallery } from "../Gallery";
import styles from "./Main.module.scss";

export const Main = () => {
  const showGallery = useAppSelector(hasImages);

  return (
    <div className={styles.container}>
      {showGallery && <Gallery />}

      <CanvasSizeSelector />

      <Canvas />
    </div>
  );
};
