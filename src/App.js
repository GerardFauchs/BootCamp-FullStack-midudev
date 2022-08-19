import "./styles.css";
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

  return (
    <div className="App">
      <h1>Atacando API jsonplaceholder.typicode.com</h1>
      <h2>POSTS:</h2>
      <ol>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <hr />
            </div>
          );
        })}
      </ol>
    </div>
  );
}
