import { Fragment, useState } from "react";
import "./Plan.css";

const planes = [
  {
    name: "Básico con anuncios",
    specs: [
      { name: "Precio al mes", value: "5,49€" },
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

const headers = planes[0].specs.map((spec) => {
  return {
    name: spec.name,
    values: planes.map((plan) => {
      return {
        plan: plan.name,
        value: plan.specs.find((s) => s.name === spec.name).value,
      };
    }),
  };
});

export function Plan({ changeView }) {
  const [selectedPlan, setSelectedPlan] = useState(planes[0]);

  return (
    <div className="content">
      <header>
        <img className="logo" src="/src/assets/logo.png" alt="" />
        <a href="#">Sign up</a>
      </header>
      <div className="recomendaciones">
        <h2>Selecciona el plan ideal para ti</h2>
        <ul>
          <li>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <span>Ve todo lo que quieras</span>
          </li>
          <li>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <span>Recomendaciones solo para ti.</span>
          </li>
          <li>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <span>Cambia o cancela tu plan en cualquier momento.</span>
          </li>
        </ul>
      </div>
      <div className="selPlan">
        <table width="100%">
          <tbody>
            <tr className="planes-names">
              <th></th>
              {planes.map((plan) => (
                <td
                  key={plan.name}
                  className={plan.name === selectedPlan.name ? "selected" : ""}
                >
                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className="caja"
                  >
                    {plan.name}
                  </button>
                </td>
              ))}
            </tr>
            {headers.map(({ name, values }) => (
              <tr key={name} className="specs-names">
                <th>{name}</th>
                {values.map(({ plan, value }) => (
                  <td
                    key={plan}
                    className={plan === selectedPlan.name ? "selected" : ""}
                  >
                    {typeof value === "boolean" ? (
                      value ? (
                        <svg
                          className="check"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke={
                            plan === selectedPlan.name ? "red" : "#5a5959"
                          }
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      )
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn"
          onClick={() => changeView("pagament", { selectedPlan })}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
