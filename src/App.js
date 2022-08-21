import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { Note } from "./components/Note";

export const App = (props) => {
  console.log("Render component App");

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect fetch");
    setLoading(true);

    setTimeout(() => {
      // Simulando delay de connexión
      // Con axios, mas facil y mejor
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response);
          const { data } = response;
          setPosts(data);
          setLoading(false);
        });

      /*
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPosts(json);
          console.log("Datos obtenidos");
          setLoading(false);
        });*/
    }, 5000);
  }, []); // Ejecutar solo cuando se renderiza el componente por primera vez.

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Crear Note");

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    console.log(noteToAddToState);

    // no hacer: notes.push(noteToAddToState), en React creamos nuevos estados, no podemos mutar el objeto.
    setNotes([...notes, noteToAddToState]); // Este nos crea un nuevo arra a partir de valores
    setNewNote(""); // limpiar input text
  };

  const handleShowAll = (event) => {
    setShowAll(() => !showAll);
  };

  return (
    <div className="App">
      <section className="Notes">
        <h1>Gestión de notas</h1>

        <h2>Crear Note:</h2>
        <aside>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Entrar Note"
              onChange={handleChange}
              value={newNote}
            />
            <input type="submit" value="Crear Note" />
          </form>
          <br />
          <button onClick={handleShowAll}>
            {showAll ? "Show only Important" : "Show All"}
          </button>
        </aside>

        <h2>Listado Notes:</h2>
        {notes
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })
          .map((note) => (
            <Note key={note.id} {...note} />
          ))}
      </section>

      <section className="API">
        <h1>Atacando API jsonplaceholder.typicode.com</h1>
        <h2>Listado Posts:</h2>
        {loading ? <img src="./transrchivos.gif" alt="Cargando..." /> : ""}
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
