import { ReactNode } from "react";

import styles from "./Footer.module.scss";

export const Footer = ({ children }: { children: ReactNode }) => {
  return <footer className={styles.container}>{children}</footer>;
};
