import styles from "./Button.module.scss";

export const Button = ({
  label,
  disabled,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      disabled={disabled}
      className={styles.container}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};
