import { ReactNode } from "react";

import { Legend } from "../Legend";
import styles from "./Field.module.scss";

export const Field = ({
  children,
  legend,
  icon,
}: {
  children: ReactNode;
  legend: string;
  icon?: ReactNode;
}) => {
  return (
    <fieldset className={styles.container}>
      <Legend legend={legend} icon={icon} />

      {children}
    </fieldset>
  );
};
