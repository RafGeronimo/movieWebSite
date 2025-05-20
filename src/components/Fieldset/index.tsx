import type { FieldsetHTMLAttributes } from "react";
import styles from "./Fieldset.module.css";

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  variant?: "primary" | "secondary";
}

const Fieldset = ({ children, variant = "primary" }: FieldsetProps) => {
  return (
    <fieldset className={`${styles.inputWrapper} ${variant === "primary" ? styles.primary : styles.secondary}`}>
      {children}
    </fieldset>
  );
};

export default Fieldset;
