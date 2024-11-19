import { ReactNode } from "react";

import styles from "./Aside.module.scss";

export const Aside = ({ children }: { children: ReactNode }) => {
  return <aside className={styles.container}>{children}</aside>;
};
