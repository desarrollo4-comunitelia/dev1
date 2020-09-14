import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const BUSQUEDAS_DIRECTAS = ["gatos", "perros", "pájaros"];

export default function Home() {
  const [busqueda, setBusqueda] = useState({ texto: "" });
  const [location, setLocation] = useLocation();

  const onhandleInputChange = (event) => {
    setBusqueda(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(`/imagenes/${busqueda}`);
  };

  return (
    <>
      <div>
        <h2>Buscador de Imágenes</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="¿Qué imagen desea buscar...?"
            onChange={onhandleInputChange}
            type="search"
          />
          <button>Buscar</button>
        </form>
      </div>
      <div>
        <h3>Búsquedas guardadas</h3>
        <ul>
          {BUSQUEDAS_DIRECTAS.map((busquedas) => (
            <li key={busquedas}>
              <Link to={`/imagenes/${busquedas}`}>Imágenes de {busquedas}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
