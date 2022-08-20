import { createRoot } from "react-dom/client";

import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const notes = [
  {
    id: 1,
    content: "Hola que TreeWalker",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
    categories: ["Futbol", "Basquet"]
  },
  {
    id: 2,
    content: "dfsdfdsfsdf que TreeWdsfsdfsfsdfalker",
    date: "2019-04-30T19:20:14.298Z",
    important: false,
    categories: []
  },
  {
    id: 3,
    content: "dfsdfdsfsdf qgfhfghfghfghfghfghWdsfsdfsfsdfalker",
    date: "2019-04-28T19:20:14.298Z",
    important: true,
    categories: ["Ferarri", "Audi", "Mercedes"]
  }
];

root.render(<App notes={notes} />);
