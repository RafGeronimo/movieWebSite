import type { ReactNode, SelectHTMLAttributes } from "react";
import styles from "./SelectGroup.module.css";

interface SelectGroup extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: ReactNode;
}

const SelectGroup = ({ children, icon, ...rest }: SelectGroup) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <select className={styles.select} {...rest}>
        {children}
      </select>
    </div>
  );
};

export default SelectGroup;
