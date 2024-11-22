import { ChangeEvent, KeyboardEvent, ReactNode } from "react";

import styles from "./Input.module.scss";

export const Input = ({
  type = "text",
  value,
  min,
  max,
  icon,
  placeholder,
  disabled,
  onChange,
  onKeyDown,
}: {
  type?: string;
  value: string | number;
  min?: number;
  max?: number;
  icon: ReactNode;
  placeholder: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles.container}>
      {icon}

      <input
        type={type}
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        className={styles.container}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    </div>
  );
};
