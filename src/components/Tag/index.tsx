import classNames from "classnames";
import styles from "./Tag.module.css";
import type { Categoria, Classificacao } from "../../types";

type TagProps = {
  value: Categoria | Classificacao;
};

const tagClasses = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.catorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};

const Tag = ({ value }: TagProps) => {
  const className = classNames(styles.tag, tagClasses[value]);
  return <span className={className}>{value}</span>;
};

export default Tag;
