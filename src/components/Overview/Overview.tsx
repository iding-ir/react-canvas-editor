import { ZoomSelector } from "../../features/overview";
import styles from "./Overview.module.scss";

export const Overview = () => {
  return (
    <div className={styles.container}>
      <ZoomSelector />
    </div>
  );
};
