import { ChangeEvent, KeyboardEvent, ReactNode } from "react";

import styles from "./Input.module.scss";

export const Input = ({
  icon,
  value,
  type = "text",
  min,
  max,
  placeholder,
  disabled,
  autoFocus,
  onChange,
  onKeyDown,
}: {
  icon: ReactNode;
  value: string | number;
  type?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles.container}>
      {icon}

      <input
        className={styles.container}
        value={value}
        type={type}
        min={min}
        max={max}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
