import React from "react";

const Projects = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Mis Proyectos</h2>
      <p>Aquí irán las tarjetas de cada proyecto del portafolio.</p>
    </div>
  );
};

export default Projects;

/* // src/components/Projects.jsx
//import { Card, CardContent } from "../ui/card";
//import { Button } from "@/components/ui/button";
import { FileText, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="p-6" id="proyectos">
      <h2 className="text-3xl font-bold mb-6">🧩 Proyectos Destacados</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-lg p-4">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">
              🏘️ Fichas Inmobiliarias Automáticas
            </h3>
            <p className="text-sm mb-4 text-gray-600">
              Automatización completa para generar fichas inmobiliarias desde
              PDFs con imágenes y texto. Extrae información, guarda imágenes y
              crea un Word estilizado listo para enviar o imprimir.
            </p>

            <img
              src="/proyectos/automatizacion/ficha_inmobiliaria/Proceso_fig.png"
              alt="Flujo del proyecto"
              className="rounded-lg mb-4 border"
            />

            <div className="flex gap-4">
              <Button asChild>
                <a
                  href="https://github.com/kleonb/landing_inmobiliario/blob/main/proyectos/automatizacion/ficha_inmobiliaria/README.md"
                  target="_blank"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Ver README
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a
                  href="https://github.com/kleonb/landing_inmobiliario/tree/main/proyectos/automatizacion/ficha_inmobiliaria"
                  target="_blank"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Ver código
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
 */