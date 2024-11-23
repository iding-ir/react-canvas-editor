import { ReactNode } from "react";

import styles from "./Legend.module.scss";

export const Legend = ({
  legend,
  icon,
}: {
  legend: string;
  icon?: ReactNode;
}) => {
  return (
    <legend className={styles.container}>
      {icon}
      {legend}
    </legend>
  );
};
