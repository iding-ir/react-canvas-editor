import clsx from "clsx";

import Image from "../../../../assets/icons/select.svg";
import styles from "./Select.module.scss";

export type Option = {
  value: string;
  label: string;
};

export const Select = ({
  id,
  items,
  value,
  icon,
  label,
  direction = "vertical",
  onChange,
}: {
  id: string;
  items: Option[];
  value: string;
  icon: React.ReactNode;
  label?: string;
  direction?: "horizontal" | "vertical";
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const classNames = clsx(styles.container, {
    [styles.horizontal]: direction === "horizontal",
    [styles.vertical]: direction === "vertical",
  });

  return (
    <div className={classNames}>
      <i className={styles.icon}>{icon}</i>

      <label htmlFor={id}>{label}</label>

      <select id={id} onChange={onChange} defaultValue={value}>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <i className={styles.arrow}>
        <Image />
      </i>
    </div>
  );
};
