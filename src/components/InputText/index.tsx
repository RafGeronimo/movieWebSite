import type { InputHTMLAttributes } from "react";
import styles from "./InputText.module.css";

const InputText = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />;
};

export default InputText;
