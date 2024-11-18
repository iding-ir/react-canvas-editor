import { ReactNode } from "react";

import styles from "./Section.module.scss";

export const Section = ({ children }: { children: ReactNode }) => {
  return <section className={styles.container}>{children}</section>;
};
