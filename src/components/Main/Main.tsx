import { useAppSelector } from "../../app/hooks";
import { hasImages } from "../../features/gallery";
import { Canvas } from "../Canvas";
import { Gallery } from "../Gallery";
import styles from "./Main.module.scss";

export const Main = () => {
  const showGallery = useAppSelector(hasImages);

  return (
    <div className={styles.container}>
      {showGallery && <Gallery />}

      <Canvas />
    </div>
  );
};
