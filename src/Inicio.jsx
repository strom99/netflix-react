import { useState } from "react";
import "./Inicio.css";

export function Inicio({ changeView }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (e) => {
    setEmail(e.target.value);
    e.target.setCustomValidity("");
    if (!e.target.checkValidity()) {
      if (e.target.validity.typeMismatch) {
        e.target.setCustomValidity("Introduce un email valido");
      }

      if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("El email es requerido");
      }
      setError(false);
      e.target.reportValidity();
    } else {
      setError(true);
    }
  };

  const validation = (evt) => {
    if (!evt.target.checkValidity()) {
      evt.preventDefault();
      evt.target.reportValidity();
    } else {
      changeView("registro", { email });
    }
  };
  return (
    <div className="App">
      <div className="suscripcion">
        <h3>Disfruta cuando quieras. Cancela cuando quieras.</h3>
        <span>
          Quieres ver algo ya? Escribe tu direccion de correo electronico para
          crear una suscripcion a Netflix o reactivarla
        </span>
        <form action="" onSubmit={validation}>
          <input
            className={error ? `correcto` : `error`}
            type="email"
            placeholder="Direccion correo"
            value={email}
            onInput={validateEmail}
            onBlur={validateEmail}
            required
          />
          <button className="btn">Empezar</button>
        </form>
      </div>
    </div>
  );
}
