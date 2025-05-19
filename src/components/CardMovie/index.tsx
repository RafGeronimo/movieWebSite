import Tag, { type Categoria, type Classificacao } from "../Tag";
import styles from "./CardMovie.module.css";

type CardMovieProps = {
  src: string;
  alt: string;
  title: string;
  gender: string;
  duration: number;
  category: Categoria;
  classification: Classificacao;
};

const CardMovie = (props: CardMovieProps) => {
  const { src, alt, title, gender, category, duration, classification } = props;
  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{title}</h3>
      </div>
      <div className={styles.informacoes}>
        <div className={styles.linha1}>
          <p>{gender}</p>
          <Tag value={category} />
        </div>
        <div className={styles.linha2}>
          <p>{duration}</p>
          <Tag value={classification} />
        </div>
      </div>
    </li>
  );
};

export default CardMovie;
