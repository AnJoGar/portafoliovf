import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-1 relative z-20 " 
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis Proyectos
      </h1>
      <div className="h-full w-full  flex flex-wrap  justify-center gap-10 px-10">


        <div className="w-full md:w-1/4 ">
        <ProjectCard
          src="/SistemaOdontologico.png"
          title="Sistema de reserva de citas odontológicas"
          description="Proyecto desarrollado con Angular, Nodejs, ASP.NET y Sql server"
          githubLink="https://github.com/AnJoGar/SistemaAdministracionReservacionOdontologicas.git"
          
        />


        </div>
       <div className="w-full md:w-1/4">
       <ProjectCard
          src="/bot.png"
          title="Bot para detectar emociones"
          description="Este bot fue desarrollado con python, y algoritmos de aprendizaje para por medio de la voz se detecte la emoción"
          githubLink="https://github.com/AnJoGar/proyectobot-emociones.git"
        />
       </div >
      
       <div className="w-full md:w-1/4">
       <ProjectCard
          src="/reserva.png"
          title="Sistema de reservación de vuelos"
          description="Este sistema fue desarrollado en C# y Sql server el cual sera un sistema para el manejo de un recepcionista que se encargara de registrar la reserva de vuelos de los clientes"
          githubLink="https://github.com/AnJoGar/SistemaAgenciaViajes.git"

        />
       </div>


  
       <div className="w-full md:w-1/4">
       <ProjectCard
          src="/libreria1111.png"
          title="Aplicación de Lista de Libros"
          description="Este sistema fue desarrollado en Angular con la funcionalidad, permitiendo a los usuarios explorar y gestionar su catálogo de libros de manera eficiente." 
          Link="https://libreriacr71.netlify.app/"
          githubLink="https://github.com/AnJoGar/SistemaAgenciaViajes.git"
          
        />

       </div>

       <div className="w-full md:w-1/4">
       <ProjectCard
          src="/traductor.png"
          title="Aplicación movil de traducción"
          description="Esta aplicacioón fue desarrollado en Java en el IDE Android Studio, VoxBridge integra un sistema de reconocimiento de voz que permitiendo la traducción" 
         
          githubLink="https://github.com/AnJoGar/TraductorGrupo1.git"
          
        />

       </div>
       <div className="w-full md:w-1/4">
       <ProjectCard
          src="/nutricion.png"
          title="Aplicación web de seguimiento de ejercicios y nutrición"
          description="Proyecto desarrollado para registrar y calcular las calorias consumidas y quemadas por un usuario, se utilizó con Angular, Nodejs, ASP.NET y Sql server" 
         
          githubLink="https://github.com/AnJoGar/SistemaNutricionEjerciciosV2.git"
          
        />

       </div>
       <div className="w-full md:w-1/4">
       <ProjectCard
          src="/prediccion.png"
          title="PrediCardio: Modelo de Predicción de Enfermedad Cardiovascular"
          description="Modelo predictivo de aprendizaje automático diseñado para identificar la probabilidad de padecimiento de enfermedad cardiovascular, basado en características de salud y estilo de vida" 
         
          githubLink="https://github.com/AnJoGar/Prediccion_enfermedad_cardiaca_Proyecto.git"
          
        />

       </div>
       <div className="w-full md:w-1/4">
       <ProjectCard
          src="/prediccion.png"
          title="PrediCardio: Modelo de Predicción de Enfermedad Cardiovascular"
          description="Modelo predictivo de aprendizaje automático diseñado para identificar la probabilidad de padecimiento de enfermedad cardiovascular, basado en características de salud y estilo de vida" 
         
          githubLink="https://github.com/AnJoGar/Prediccion_enfermedad_cardiaca_Proyecto.git"
          
        />

       </div>
           

      </div>
    </div>
  );
};

export default Projects;