import styles from "./styles.module.css";
import logo from "../../assets/svg/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
