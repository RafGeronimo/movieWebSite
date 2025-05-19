import styles from "./link.module.css";

//tipando o componente com Atributos intrínsicos pois o comp pode receber nao so strings, mas jsx tb;
//entao tipamos usando os atributos para uma anchor e colocamos o HTMLAnchorElemento como generics para
//definir corretamente os parametros "rest" que ele pode receber
const Link = ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={styles.link} {...rest}>
      {children}
    </a>
  );
};

export default Link;
