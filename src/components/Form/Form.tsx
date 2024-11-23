import { ReactNode } from "react";

import styles from "./Form.module.scss";

export const Form = ({ children }: { children: ReactNode }) => {
  return <form className={styles.container}>{children}</form>;
};
