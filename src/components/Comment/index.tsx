import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((statePrev) => {
      return statePrev + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/felipesouzadsgn.png" />
      <div className={styles.comment__wrapper}>
        <div className={styles.comment__content}>
          <header className={styles.comment__header}>
            <div className={styles.comment__author}>
              <strong className={styles.comment__author_name}>
                Felipe Souza
              </strong>
              <time
                className={styles.comment__author_time}
                title="19 de Fevereiro ás 11:40h"
                dateTime="2023-02-19 11:40:38"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              className={styles.comment__btn_delete}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p className={styles.comment__message}>{content}</p>
        </div>
        <footer className={styles.comment__footer}>
          <button
            onClick={handleLikeComment}
            className={styles.comment__btn_like}
          >
            <ThumbsUp size={20} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
