import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./MovieSection.module.css";
import MovieList from "../MovieList";

const movies = [
  {
    id: 1,
    src: "/Imagens/Cards filmes/cardStarWarsEpI.jpg",
    alt: "star wars ep I",
    title: "Star Wars: A new hope",
    category: "2D" as const,
    classification: "Livre" as const,
    genre: "Action",
    duration: 90,
  },
  {
    id: 2,
    src: "/Imagens/Cards filmes/Card - Amigo da sombra.png",
    alt: "Imagem do filme Amigo da sombra",
    title: "Amigo da sombra",
    category: "2D" as const,
    classification: "12 anos" as const,
    genre: "Suspense",
    duration: 110,
  },
  {
    id: 3,
    src: "/Imagens/Cards filmes/Card - Amigos do bosque mágico.png",
    alt: "Imagem do filme Amigo do bosque mágico",
    title: "Amigo do bosque mágico",
    category: "2D" as const,
    classification: "Livre" as const,
    genre: "Animação",
    duration: 60,
  },
  {
    id: 4,
    src: "/Imagens/Cards filmes/Card - Caminho para o abismo.png",
    alt: "Imagem do filme Caminho para o abismo",
    title: "Caminho para o abismo",
    category: "2D" as const,
    classification: "14 anos" as const,
    genre: "Horror",
    duration: 103,
  },
  {
    id: 5,
    src: "/Imagens/Cards filmes/Card - Desastres do Escritório.png",
    alt: "Imagem do filme Desastres do Escritório",
    title: "Desastres do Escritório",
    category: "2D" as const,
    classification: "Livre" as const,
    genre: "Comédia",
    duration: 85,
  },
  {
    id: 6,
    src: "/Imagens/Cards filmes/Card - Mestres do futuro.png",
    alt: "Imagem do filme Mestres do Futuro",
    title: "Mestres do Futuro",
    category: "2D" as const,
    classification: "Livre" as const,
    genre: "Documentário",
    duration: 120,
  },
  {
    id: 7,
    src: "/Imagens/Cards filmes/Card - La Esperanza.png",
    alt: "Imagem do filme La Esperanza",
    title: "La Esperanza",
    category: "2D" as const,
    classification: "12 anos" as const,
    genre: "Drama",
    duration: 98,
  },
  {
    id: 8,
    src: "/Imagens/Cards filmes/Card - O nexus do tempo.png",
    alt: "Imagem do filme O nexus do tempo",
    title: "O nexus do tempo",
    category: "3D" as const,
    classification: "10 anos" as const,
    genre: "Ficcção Científica",
    duration: 105,
  },
];

const MovieSection = () => {
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText placeholder={"Search movie"} />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Now showing</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default MovieSection;
