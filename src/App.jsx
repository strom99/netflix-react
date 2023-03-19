import { useState } from "react";
import { Inicio } from "./Inicio";
import { Registro } from "./Registro";
import { Plan } from "./Plan";

function App() {
  const [view, setView] = useState("plan");

  // cambiar vistas
  if (view === "inicio") {
    return <Inicio changeView={setView} />;
  } else if (view === "registro") {
    return <Registro changeView={setView} />;
  } else if (view === "plan") {
    return <Plan changeView={setView} />;
  }
}

export default App;
