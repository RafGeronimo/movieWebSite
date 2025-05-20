import type { Movie } from "../../types";
import Tag from "../Tag";
import styles from "./CardMovie.module.css";

const CardMovie = (props: Movie) => {
  const { src, alt, title, genre, category, duration, classification } = props;
  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{title}</h3>
      </div>
      <div className={styles.informacoes}>
        <div className={styles.linha1}>
          <p>{genre}</p>
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
