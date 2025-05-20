import type { Movie } from "../../types";
import CardMovie from "../CardMovie";
import styles from "./MovieList.module.css";

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.list}>
      {movies.map((m) => (
        <CardMovie key={m.id} {...m} />
      ))}
    </ul>
  );
};

export default MovieList;
