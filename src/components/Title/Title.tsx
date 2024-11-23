import { ReactNode } from "react";

import styles from "./Title.module.scss";

export const Title = ({ text, icon }: { text: string; icon: ReactNode }) => {
  return (
    <h3 className={styles.container}>
      {icon}
      {text}
    </h3>
  );
};
