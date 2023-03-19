import { Fragment, useState } from "react";
import "./Plan.css";

const planes = [
  {
    name: "Básico con anuncios",
    specs: [
      { name: "Precio al mes", values: "5,49€" },
      { name: "Calidad de vídeo", value: "Buena" },
      { name: "Resolución", value: "720p" },
      {
        name: "Míralo en tu TV, computadora, teléfono móvil y tableta",
        value: true,
      },
      { name: "Descargas", value: false },
    ],
  },
  {
    name: "Estándar",
    specs: [
      { name: "Precio al mes", value: "12,99€" },
      { name: "Calidad de vídeo", value: "Muy buena" },
      { name: "Resolución", value: "1080p" },
      {
        name: "Míralo en tu TV, computadora, teléfono móvil y tableta",
        value: true,
      },
      { name: "Descargas", value: true },
    ],
  },
  {
    name: "Premium",
    specs: [
      { name: "Precio al mes", value: "17,99€" },
      { name: "Calidad de vídeo", value: "Excepcional" },
      { name: "Resolución", value: "4k+HDR" },
      {
        name: "Míralo en tu TV, computadora, teléfono móvil y tableta",
        value: true,
      },
      { name: "Descargas", value: true },
    ],
  },
];

export function Plan({ changeView }) {
  const [selectedPlan, setSelectedPlan] = useState(undefined);

  const selecPlan = (e) => {
    console.log(e);
  };

  return (
    <div className="content">
      <div className="ctn">
        <div className="recomendaciones">
          <h2>Selecciona el plan ideal para ti</h2>
          <ul>
            <li>
              <img src="/src/assets/check.png" alt="" />
              <span>Ve todo lo que quieras</span>
            </li>
            <li>
              <img src="/src/assets/check.png" alt="" />
              <span>Recomendaciones solo para ti.</span>
            </li>
            <li>
              <img src="/src/assets/check.png" alt="" />
              <span>Cambia o cancela tu plan en cualquier momento.</span>
            </li>
          </ul>
        </div>
        <div className="selPlan">
          <table>
            <tbody>
              <tr>
                <th>Precio al mes</th>
                <td>7,99€</td>
                <td>7,99€</td>
                <td>7,99€</td>
              </tr>
            </tbody>
          </table>
          {/* <ul className="planes">
            <li className="plan">
              <span className="primero">Precio mensual</span>
              <ul className="items">
                <li>
                  <button onClick={selecPlan} className="caja">
                    <span>Basico con anuncios</span>
                  </button>
                  <span>5,49 euros</span>
                </li>
                <li>
                  <button className="caja">
                    <span>Estandar</span>
                  </button>
                  <span>12,99 euros</span>
                </li>
                <li>
                  <button className="caja">
                    <span>De primera calidad</span>
                  </button>
                  <span>17,99 euros</span>
                </li>
              </ul>
            </li>
            <li className="plan">
              <span className="primero">Calidad de video</span>
              <ul className="items">
                <li>Buena</li>
                <li>Muy buena</li>
                <li>Excepcional</li>
              </ul>
            </li>
            <li className="plan">
              <span className="primero">Resolucion</span>
              <ul className="items">
                <li>720p</li>
                <li>1080p</li>
                <li>4k+HDR</li>
              </ul>
            </li>
            <li className="plan">
              <span className="primero">
                Míralo en tu TV, computadora, teléfono móvil y tableta
              </span>
              <ul className="items">
                <li>
                  <img src="/src/assets/check.png" alt="" />
                </li>
                <li>
                  <img src="/src/assets/check2.png" alt="" />
                </li>
                <li>
                  <img src="/src/assets/check2.png" alt="" />
                </li>
              </ul>
            </li>
            <li className="plan">
              <span className="primero">Descargas</span>
              <ul className="items">
                <li>
                  <span className="no">-</span>
                </li>
                <li>
                  <img src="/src/assets/check2.png" alt="" />
                </li>
                <li>
                  <img src="/src/assets/check2.png" alt="" />
                </li>
              </ul>
            </li>
          </ul> */}
          <button className="btn">Siguiente</button>
        </div>
      </div>
    </div>
  );
}
