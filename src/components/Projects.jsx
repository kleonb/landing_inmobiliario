import React from "react";

const Projects = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Mis Proyectos</h2>

      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
        <h3>📄 Fichas Inmobiliarias Automáticas</h3>
        <p>
          Script en Python que procesa archivos PDF de propiedades para generar fichas estilizadas, extrayendo texto e imágenes
          de forma automatizada. Ideal para inmobiliarias que necesitan generar catálogos visuales y consistentes.
        </p>
        <a
          href="https://github.com/kleonb/landing_inmobiliario/tree/main/proyectos/automatizacion/fichas_mobiliaria"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Ver repositorio en GitHub
        </a>

        <div style={{ marginTop: "1rem" }}>
          <img
            src="/Proceso_fig.png"
            alt="Diagrama del proceso"
            style={{ width: "100%", borderRadius: "8px", border: "1px solid #ddd" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
