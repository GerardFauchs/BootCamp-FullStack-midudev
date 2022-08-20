import "./styles.css";
import { Note } from "./components/Note";
import { useEffect, useState } from "react";

export const App = (props) => {
  console.log("Render component App");

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

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
  }, []); // Ejecutar solo cuando se renderiza el componente por primera vez.

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
    console.log("Crear Note");
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    console.log(noteToAddToState);
    setNotes(notes.concat(noteToAddToState));
  };

  return (
    <div className="App">
      <section className="Notes">
        <h1>Gestión de notas</h1>

        <h2>Crear Note:</h2>
        <aside>
          <input
            type="text"
            placeholder="Entrar Note"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Crear Note</button>
        </aside>

        <h2>Listado Notes:</h2>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </section>

      <section className="API">
        <h1>Atacando API jsonplaceholder.typicode.com</h1>
        <h2>Listado Posts:</h2>
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
};
