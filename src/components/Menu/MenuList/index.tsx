import type { HTMLAttributes } from "react";
import styles from "./MenuList.module.css";

const MenuList = ({ children }: HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav>
      <ul className={styles.navegacao}>{children}</ul>
    </nav>
  );
};

export default MenuList;
