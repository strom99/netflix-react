import { useState } from "react";
import { Inicio } from "./Inicio";
import { Registro } from "./Registro";
import { Plan } from "./Plan";
import "./App.css";
import { Pagament } from "./Pagament";
import { Datos } from "./Datos";

function App() {
  const [view, setView] = useState("inicio");
  const [datos, setDatos] = useState({
    inicio: {},
    registro: {},
    plan: {},
    pagament: {},
  });

  // cambiar vistas
  if (view === "inicio") {
    return (
      <Inicio
        changeView={(view, data) => {
          setView(view);
          setDatos({ ...datos, inicio: data });
        }}
      />
    );
  } else if (view === "registro") {
    return (
      <Registro
        changeView={(view, data) => {
          setView(view);
          setDatos({ ...datos, registro: data });
        }}
      />
    );
  } else if (view === "plan") {
    return (
      <Plan
        changeView={(view, data) => {
          setView(view);
          setDatos({ ...datos, plan: data });
        }}
      />
    );
  } else if (view === "pagament") {
    return (
      <Pagament
        changeView={(view, data) => {
          setView(view);
          setDatos({ ...datos, pagament: data });
        }}
        plan={datos.plan.selectedPlan}
      />
    );
  } else if (view === "datos") {
    // devolvemos solos lo datos por que no hay mas vistas
    return <Datos datos={datos} />;
  }
}

export default App;
