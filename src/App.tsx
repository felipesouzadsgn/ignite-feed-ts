import "./styles/global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { PostType } from "./components/Post";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/felipesouzadsgn.png",
      name: "Felipe Souza",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "felipesouzadsgn.com.br" },
    ],
    publishedAt: new Date("2023-01-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera!" },
      { type: "paragraph", content: "Lorem ipsum dolor sit" },
      { type: "link", content: "felipesouzadsgn.com.br" },
      { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2023-01-14 20:13:30"),
  },
];

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <section>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
