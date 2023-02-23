import styles from "./styles.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.sidebar__cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
      />
      <section className={styles.profile}>
        <Avatar src="https://github.com/felipesouzadsgn.png" />
        <strong className={styles.profile__name}>Felipe Souza</strong>
        <span className={styles.profile__profession}>Web Developer</span>
      </section>
      <footer className={styles.sidebar__footer}>
        <a className={styles.sidebar__footer_link} href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
