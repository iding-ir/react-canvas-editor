import { ReactNode } from "react";
import styles from "./Title.module.scss";

export const Title = ({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}) => {
  return (
    <h3 className={styles.container}>
      {children}
      {text}
    </h3>
  );
};
