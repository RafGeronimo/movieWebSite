import styles from "./Banner.module.css";

type Props = {
  src: string;
  alt: string;
};

const Banner = ({ src, alt }: Props) => {
  return <img src={src} alt={alt} className={styles.banner} />;
};

export default Banner;
