import React, { useState } from "react";
import "./App.css";
import senyores from "./apuntan";

function App() {
  const [marcados, setMarcados] = useState(0);
  return (
    <>
      <header className="cabecera">
        <h1>Señores que te apuntan con el dedo</h1>
        <p className="totales"><span className="nmarcados">{marcados}</span> señores que te apuntan con el dedo marcados</p>
        <a className="accion-marcar" href="marcar-todos">Marcar todos</a>
      </header>
      <main>
        {
          senyores.map(senyor =>
            <article key={senyor.id} className="senyor"
              onMouseEnter={() => setMarcados(1)}
              onMouseLeave={() => setMarcados(0)}>
              <div className="avatar">
                <img src={`img/${senyor.foto}`} alt="El Fary señalándote con el dedo" />
                <span className="inicial">{senyor.nombre === "El Fary" ? "F" : senyor.nombre.charAt(0).toUpperCase()}</span>
              </div>
              <div className="info">
                <h2>{senyor.nombre}</h2>
                <ul>
                  <li><span className="etiqueta">Profesión:</span> {senyor.profesion}</li>
                  <li><span className="etiqueta">Estado:</span> {senyor.estado}</li>
                  <li><span className="etiqueta">Twitter:</span> {senyor.twitter}</li>
                </ul>
              </div>
              <i className="icono fas fa-check"></i>
            </article>
          )
        }

      </main>
    </>
  );
}

export default App;
