import { Canvas } from "../Canvas";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.container}>
      <Canvas />
    </div>
  );
};
