import type { HTMLAttributes } from "react";
import styles from "../Header.module.css";

const HeaderList = ({ children }: HTMLAttributes<HTMLUListElement>) => {
  return <ul className={styles.header}>{children}</ul>;
};

export default HeaderList;
