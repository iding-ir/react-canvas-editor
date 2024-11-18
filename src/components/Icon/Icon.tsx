import clsx from "clsx";
import { ReactNode } from "react";

import styles from "./Icon.module.scss";

export const Icon = ({
  size = "lg",
  color = "normal",
  active = false,
  animated = false,
  text,
  ariaLabel,
  onClick,
  children,
}: {
  size?: "sm" | "md" | "lg";
  color?: "normal" | "reverse";
  active?: boolean;
  animated?: boolean;
  text?: string;
  ariaLabel?: string;
  onClick?: () => void;
  children: ReactNode;
}) => {
  const classNames = clsx(styles.container, {
    [styles.sm]: size === "sm",
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
    [styles.normal]: color === "normal",
    [styles.reverse]: color === "reverse",
    [styles.active]: active,
    [styles.animated]: animated,
  });

  return (
    <div className={classNames} onClick={onClick} aria-label={ariaLabel}>
      <span className={styles.icon}>{children}</span>

      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};
