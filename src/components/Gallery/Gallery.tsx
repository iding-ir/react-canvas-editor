import { useAppSelector } from "../../app/hooks";
import { selectImages } from "../../features/gallery";
import styles from "./Gallery.module.scss";

export const Gallery = () => {
  const images = useAppSelector(selectImages);

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <img key={index} src={image} alt="gallery" />
      ))}
    </div>
  );
};
