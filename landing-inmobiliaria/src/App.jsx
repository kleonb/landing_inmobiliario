function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Karina León</h1>
        <h2 style={{ fontSize: '1.25rem', color: '#666' }}>Consultora en Automatización, IA Aplicada y Gestión de Proyectos Tecnológicos</h2>
      </header>

      <section>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Resumen Profesional</h3>
        <p>
          Profesional con más de 20 años de experiencia liderando proyectos tecnológicos en sectores público y privado. Especialista en automatización con Python y Google Apps Script, integración de IA generativa (NLP, generación de prompts), y transformación digital. Domino metodologías ágiles, híbridas y tradicionales para conectar la estrategia con soluciones prácticas, eficientes y centradas en las personas.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Servicios que Ofrezco</h3>
        <ul>
          <li>✔ Automatización de tareas con Python y Google Apps Script</li>
          <li>✔ Generación automática de documentos, reportes y mensajes personalizados</li>
          <li>✔ Análisis de datos con Python, Excel y Google Sheets</li>
          <li>✔ Diseño de flujos eficientes con metodologías ágiles (Scrum, híbrido)</li>
          <li>✔ Consultoría para transformación digital e integración de IA</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Logros Destacados</h3>
        <ul>
          <li>🏆 Reduje en 40% el tiempo de generación de fichas inmobiliarias mediante IA y automatización de PDFs.</li>
          <li>🏆 Implementé el sistema SABER, beneficiando a más de 10,000 usuarios y reduciendo los costos operativos en un 80%.</li>
          <li>🏆 Diseñé un sistema de referidos inmobiliarios automatizado con Google Apps Script y formularios inteligentes.</li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '3rem', color: '#999' }}>
        <p>© 2025 Karina León – veraltoinmobiliaria.com</p>
      </footer>
    </div>
  );
}

export default App;
