import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis Proyectos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SistemaOdontologico.png"
          title="Sistema de reserva de citas odontológicas"
          description="Proyecto desarrollado con Angular, Nodejs, .NetFramerwork y Sql server"
          githubLink="https://github.com/AnJoGar/SistemaAdministracionReservacionOdontologicas.git"
          
        />
        <ProjectCard
          src="/bot.png"
          title="Bot para detectar emociones"
          description="Este bot fue desarrollado con python, y algoritmos de aprendizaje para por medio de la voz se detecte la emoción"
          githubLink="https://github.com/AnJoGar/proyectobot-emociones.git"
        />
        <ProjectCard
          src="/reserva.png"
          title="Sistema de reservación de vuelos"
          description="Este sistema fue desarrollado en C# y Sql server el cual sera un sistema para el manejo de un recepcionista que se encargara de registrar la reserva de vuelos de los clientes"
          githubLink="https://github.com/AnJoGar/SistemaAgenciaViajes.git"

        />
        
      </div>
    </div>
  );
};

export default Projects;