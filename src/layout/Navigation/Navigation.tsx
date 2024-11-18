import { ReactNode } from "react";

import styles from "./Navigation.module.scss";

export const Navigation = ({ children }: { children: ReactNode }) => {
  return <nav className={styles.container}>{children}</nav>;
};
