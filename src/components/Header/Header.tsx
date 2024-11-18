import styles from "./Header.module.scss";

export const Header = ({ title }: { title: string }) => {
  return (
    <h1 key={title} className={styles.container}>
      {title}
    </h1>
  );
};
