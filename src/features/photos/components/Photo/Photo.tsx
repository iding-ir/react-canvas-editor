import { useAppDispatch } from "../../../../app/hooks";
import { addImage } from "../../../images";
import { PhotoType } from "../../photos";
import styles from "./Photo.module.scss";

export const Photo = ({ photo }: { photo: PhotoType }) => {
  const dispatch = useAppDispatch();
  const { src } = photo;

  const handleClick = () => {
    dispatch(addImage(photo));
  };

  return (
    <img
      className={styles.container}
      src={src}
      alt="Photos"
      onClick={handleClick}
    />
  );
};
