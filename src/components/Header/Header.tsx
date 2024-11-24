import { Logo } from "../Logo";
import styles from "./Header.module.scss";

export const Header = ({ title }: { title: string }) => {
  return (
    <h1 key={title} className={styles.container}>
      <Logo />

      <span>{title}</span>
    </h1>
  );
};
