export type Categoria = "2D" | "3D";

export type Classificacao = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

export type Movie = {
  id: number;
  src: string;
  alt: string;
  title: string;
  genre: string;
  duration: number;
  category: Categoria;
  classification: Classificacao;
};
