import clsx from "clsx";

import styles from "./Svg.module.scss";

export const Svg = ({
  size = "lg",
  color = "normal",
  active = false,
  animated = false,
  text,
  src,
  ariaLabel,
  onClick,
}: {
  size?: "sm" | "md" | "lg";
  color?: "normal" | "reverse";
  active?: boolean;
  animated?: boolean;
  text?: string;
  src?: string;
  ariaLabel?: string;
  onClick?: () => void;
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
      <span className={styles.icon} style={{ maskImage: `url(${src})` }} />

      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};
