import styles from "./styles.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana, hein!"]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value);
    e.target.setCustomValidity("");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles.post__author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.post__info}>
            <strong className={styles.post__author_name}>
              {post.author.name}
            </strong>
            <span className={styles.post__author_profession}>
              {post.author.role}
            </span>
          </div>
        </div>
        <time
          className={styles.post__time}
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <section className={styles.post__content}>
        {post.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={index}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </section>
      <form onSubmit={handleCreateNewComment} className={styles.post__form}>
        <strong className={styles.post__form_title}>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          className={styles.post__form_textarea}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>
        <footer className={styles.post__form_footer}>
          <button
            className={styles.post__form_btn}
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
        </footer>
      </form>
      <div className={styles.post__comments}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
