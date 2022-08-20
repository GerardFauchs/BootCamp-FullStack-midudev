import "./styles.css";
import Note from "./components/Note";
import { useEffect, useState } from "react";

export default function App() {
  console.log("Render component App");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect fetch");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
        console.log("Datos obtenidos");
      });
  }, []); // Ejecutar solo cuando se renderiza el componente.

  const notes = [
    {
      id: 1,
      content: "Hola que TreeWalker",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    },
    {
      id: 2,
      content: "dfsdfdsfsdf que TreeWdsfsdfsfsdfalker",
      date: "2019-04-30T19:20:14.298Z",
      important: true
    },
    {
      id: 3,
      content: "dfsdfdsfsdf qgfhfghfghfghfghfghWdsfsdfsfsdfalker",
      date: "2019-04-28T19:20:14.298Z",
      important: true
    }
  ];

  return (
    <div className="App">
      <section>
        <h1>Mostrando las notas</h1>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </section>

      <section>
        <h1>Atacando API jsonplaceholder.typicode.com</h1>
        <h2>POSTS:</h2>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
            </article>
          );
        })}
      </section>
    </div>
  );
}
