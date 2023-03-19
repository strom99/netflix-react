import "./Datos.css";

export function Datos({ datos }) {
  console.log(datos);
  return (
    <div className="content">
      <header>
        <img className="logo" src="/src/assets/logo.png" alt="" />
        <a href="#">Sign up</a>
      </header>
      <div className="ctn">
        <div className="ctnDatos">
          <h1>Registro exitoso</h1>
          <ul>
            <li>
              <h3>Email</h3>
              <span>{datos.registro.email}</span>
            </li>
            <li>
              <h3>Contraseña</h3>
              <span>{datos.registro.password}</span>
            </li>
            <li>
              <h3>Plan</h3>
              <ul className="tarjeta">
                // recorremos los datos de la tarjeta
                {datos.plan.selectedPlan.specs.map((spec, index) => (
                  <li key={index}>
                    <h3>{spec.name}</h3>
                    <span>{spec.value ? "Si" : "No"}</span>
                  </li>
                ))}
              </ul>{" "}
            </li>
            <li>
              <h3>Datos de pago:</h3>
              <ul className="tarjeta">
                <li>
                  <h3>Nombre</h3>
                  <span>{datos.pagament.nombre}</span>
                </li>
                <li>
                  <h3>Apellidos</h3>
                  <span>{datos.pagament.apellidos}</span>
                </li>
                <li>
                  <h3>Numero tarjeta</h3>
                  <span>{datos.pagament.cardNumber}</span>
                </li>
                <li>
                  <h3>Fecha vencimiento</h3>
                  <span>{datos.pagament.fechaVencimiento}</span>
                </li>
                <li>
                  <h3>CVV</h3>
                  <span>{datos.pagament.cvv}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
