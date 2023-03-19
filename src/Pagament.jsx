import { useState } from "react";
import "./Pagament.css";

// pattern para las tarjetas
const VISA_REGEX = /^4[0-9]{12}(?:[0-9]{3})?$/;
const MASTERCARD_REGEX = /^5[1-5][0-9]{14}$/;
const AMERICAN_EXPRESS_REGEX = /^3[47][0-9]{13}$/;

const parts = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
}).formatToParts(new Date());

const minDate = `${parts[4].value}-${parts[0].value}-${parts[2].value}`;
const maxDate = `${Number(parts[4].value) + 25}-${parts[0].value}-${
  parts[2].value
}`;

export function Pagament({ changeView, plan }) {
  const [cardImage, setCardImage] = useState("");
  const [name, setName] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  //  son diferentes estos para que valide por separado cada estilo
  const [errorName, setErrorName] = useState(false);
  const [errorApellido, setErrorApellido] = useState(true);
  const [errorTarjeta, setErrorTarjeta] = useState(false);
  const [errorCvv, setErroCvv] = useState(false);
  const [errorFecha, setErrorFecha] = useState(false);

  function validateCardNumber(number, e) {
    e.target.setCustomValidity("");

    if (VISA_REGEX.test(number)) {
      setCardImage("visa");
      setCardNumber(number);
    } else if (MASTERCARD_REGEX.test(number)) {
      setCardImage("master-card");
      setCardNumber(number);
    } else if (AMERICAN_EXPRESS_REGEX.test(number)) {
      setCardImage("american-express");
      setCardNumber(number);
    } else {
      e.target.setCustomValidity("Introduce una tarjeta correcta");
      setCardImage("");
    }

    if (!e.target.checkValidity()) {
      if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("La tarjeta es requerida");
      }

      setErrorTarjeta(false);
      setCardImage("");

      e.target.reportValidity();
    } else {
      setErrorTarjeta(true);
    }
    e.target.reportValidity();
  }

  function validateName(e) {
    setName(e.target.value);
    e.target.setCustomValidity("");

    if (!e.target.checkValidity()) {
      if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("El nombre es requerido");
      }

      if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity("Introduce solo letras");
      }

      if (e.target.validity.tooShort) {
        e.target.setCustomValidity("Introduce minimo 3 letras");
      }

      setErrorName(false);
      e.target.reportValidity();
    } else {
      setErrorName(true);
    }
  }

  function validateApellidos(e) {
    setApellidos(e.target.value);
    e.target.setCustomValidity("");

    if (!e.target.checkValidity()) {
      if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity("No puedes ingresar numeros");
      }

      if (e.target.validity.tooShort) {
        e.target.setCustomValidity("Introduce minimo 1 letras");
      }

      e.target.reportValidity();
      setErrorApellido(false);
    } else {
      setErrorApellido(true);
    }
  }

  function validateCvv(e) {
    setCvv(e.target.value);
    console.log(e.target.validity);
    e.target.setCustomValidity("");

    if (e.target.value.length < 3) {
      e.target.setCustomValidity("Minimo 3 digitos");
    }

    if (e.target.value.length > 4) {
      e.target.setCustomValidity("Maximo 4 digitos");
    }
    if (!e.target.checkValidity()) {
      if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("Este campo es requerido");
      }
      e.target.reportValidity();
      setErroCvv(false);
    } else {
      setErroCvv(true);
    }
  }

  const validation = (evt) => {
    evt.preventDefault();
    if (!evt.target.checkValidity()) {
      evt.target.reportValidity();
    } else {
      changeView("datos", {
        nombre: name,
        cardNumber,
        fechaVencimiento,
        apellidos,
        cvv,
      });
    }
  };

  function validationFecha(e) {
    setFechaVencimiento(e.target.value);
    e.target.setCustomValidity("");

    if (!e.target.checkValidity()) {
      if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("Este campo es requerido");
      }

      if (e.target.validity.rangeUnderflow || e.target.validity.rangeOverflow) {
        e.target.setCustomValidity(
          "El mes de vencimiento debe estar en el intervalo de 2023 y 2048"
        );
      }

      e.target.reportValidity();
      setErrorFecha(false);
    } else {
      setErrorFecha(true);
    }
  }

  return (
    <div className="contenedor">
      <header>
        <img className="logo" src="/src/assets/logo.png" alt="" />
        <a href="#">Sign up</a>
      </header>
      <div className="contentPag">
        <span>Paso 3 de 3</span>
        <h2>Configura tu tarjeta de crédito o débito</h2>
        <form action="" onSubmit={validation} noValidate>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            pattern="[a-zA-Z]+$"
            onInput={validateName}
            required
            minLength="3"
            className={errorName ? `correcto` : `error`}
          />
          <input
            type="text"
            placeholder="Apellidos"
            value={apellidos}
            pattern="[a-zA-Z]+$"
            onInput={validateApellidos}
            className={errorApellido ? `correcto` : `error`}
            minLength="1"
          />
          <div className="input">
            <input
              onInput={(e) => validateCardNumber(e.target.value, e)}
              className={errorTarjeta ? `correcto` : `error`}
              type="number"
              placeholder="Numero de tarjeta"
              required
            />
            {cardImage && (
              <img
                style={{ width: "60px" }}
                src={`./src/assets/${cardImage}.png`}
                alt="Card image"
              />
            )}
          </div>
          <input
            onInput={validationFecha}
            min={minDate}
            max={maxDate}
            value={fechaVencimiento}
            className={errorFecha ? `correcto` : `error`}
            type="date"
            placeholder="Fecha de vencimiento(MM/AA)"
            required
          />
          <input
            type="number"
            placeholder="Codigo de seguridad(CVV)"
            value={cvv}
            className={errorCvv ? `correcto` : `error`}
            onInput={validateCvv}
            required
          />
          <div className="planP">
            <div>
              <span>
                {
                  plan?.specs.find((spec) => spec.name === "Precio al mes")
                    ?.value
                }{" "}
                al mes
              </span>
              <span>{plan?.name}</span>
            </div>
            <a>Cambiar</a>
          </div>
          <button className="btn">Iniciar suscripcion de pago</button>
        </form>
      </div>
    </div>
  );
}
