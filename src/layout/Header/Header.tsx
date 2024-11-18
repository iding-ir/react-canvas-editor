import { ReactNode } from "react";

import styles from "./Header.module.scss";

export const Header = ({ children }: { children: ReactNode }) => {
  return <header className={styles.container}>{children}</header>;
};
