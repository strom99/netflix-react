import { useState } from "react";
import "./Registro.css";

export function Registro({ changeView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassw, setErrorPassw] = useState(false);

  const validateEmail = (e) => {
    console.log(e.target.validity);
    setEmail(e.target.value);
    e.target.setCustomValidity("");
    if (!e.target.checkValidity()) {
      if (e.target.validity.typeMismatch) {
        e.target.setCustomValidity("Introduce un email valido");
      }

      if (e.target.value.length < 5) {
        e.target.setCustomValidity("Minimo 5 caracteres");
      }

      if (e.target.value.length > 50) {
        e.target.setCustomValidity("Maximo 50 caracteres");
      }

      if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("El email es requerido");
      }
      setErrorEmail(false);
      e.target.reportValidity();
    } else {
      setErrorEmail(true);
    }
  };

  const validatePassword = (e) => {
    setPassword(e.target.value);
    e.target.setCustomValidity("");

    if (e.target.value.length < 6) {
      e.target.setCustomValidity(
        `Minimo 6 caracteres(actualmente tiene ${e.target.value.length})`
      );
      setErrorPassw(false);
    }

    if (e.target.value.length > 60) {
      e.target.setCustomValidity("Maximo 60");
      setErrorPassw(false);
    }

    if (!e.target.checkValidity()) {
      if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("La contraseña es requerida");
      }
      setErrorPassw(false);
      e.target.reportValidity();
    } else {
      setErrorPassw(true);
    }
  };

  const validation = (evt) => {
    if (!evt.target.checkValidity()) {
      evt.preventDefault();
      evt.target.reportValidity();
    } else {
      changeView("plan", { email, password });
    }
  };

  return (
    <div className="contenedor">
      <header>
        <img className="logo" src="/src/assets/logo.png" alt="" />
        <a href="#">Sign up</a>
      </header>
      <div className="form">
        <div className="setup">
          <span>STEP 1 OF 3</span>
          <h3>Create a password to start your membership</h3>
          <p>
            Just a few more steps and you're done! <br />
            We hate paperwork, too.
          </p>
          <form id="form" onSubmit={validation}>
            <input
              name="email"
              type="email"
              id="email"
              value={email}
              onInput={validateEmail}
              className={errorEmail ? `correcto` : `error`}
              onBlur={validateEmail}
              placeholder="Introduce un email"
              required
            />
            <input
              type="password"
              id="password"
              className={errorPassw ? `correcto` : `error`}
              required
              value={password}
              onInput={validatePassword}
              onBlur={validatePassword}
              placeholder="Introduce una contraseña"
            />
            <div className="check">
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">
                Please do not email me Netflix special offers.
              </label>
            </div>
            <button className="btn">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
}
