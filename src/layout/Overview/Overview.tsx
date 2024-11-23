import { ReactNode } from "react";

import styles from "./Overview.module.scss";

export const Overview = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
