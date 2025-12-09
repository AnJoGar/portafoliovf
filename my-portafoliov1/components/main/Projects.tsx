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
          title="Aplicación de Lista de Libros (Angular)"
          description="Desarrollé una aplicación web para la gestión de un catálogo de libros con creación de listas de lectura. Implementé visualización dinámica del catálogo, filtrado por género, sincronización del estado global, persistencia con localStorage y sincronización entre pestañas sin backend. El proyecto incluye pruebas unitarias, arquitectura modular y despliegue en producción. Utilicé buenas prácticas de código, HTML semántico y una estructura preparada para escalar." 
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
          src="/red_neuronal.png"
          title="Predict_Residuos: Modelo de Predicción de la cantidad de residuos electrónicos de Guayaquil"
          description="Este proyecto es una API construida con Django para predecir la cantidad de residuos electrónicos de la ciudad de Guayaquil. Permitiendo la administración de datos relacionados con la cantidad de residuos y proporcionando endpoints para interactuar con la información." 
         
          githubLink="https://github.com/AnJoGar/Proyecto_Reciclaje.git"
          
        />

       </div>


        <div className="w-full md:w-1/4">
       <ProjectCard
          src="/satira.png"
          title="Detector de Sátira — Django + Angular + NLP"
          description="Desarrollé un sistema completo para clasificar textos como satíricos o no, usando un backend en Django, frontend en Angular y un modelo entrenado con más de 50,000 textos satíricos. Implementé modelos tradicionales de NLP y transformers mejorados con características lingüísticas propias de la sátira." 
         
          githubLink="https://github.com/AnJoGar/Detecctor_Satira"
          
        />

       </div>

        <div className="w-full md:w-1/4">
       <ProjectCard
          src="/flutter.png"
          title="Sistema de Gestión de Créditos para Tienda de Electrónica (Flutter + .Net + Angular + PostgreSQL + Railway)"
          description="Desarrollé una solución completa para la gestión de créditos y transacciones de un local de venta de productos electrónicos. El sistema integra un backend robusto en .NET, un dashboard administrativo en Angular, una aplicación móvil desarrollada en Flutter y una base de datos en PostgreSQL, todo desplegado en Railway.

La plataforma permite administrar clientes, otorgar créditos, registrar pagos, visualizar historiales y generar reportes en tiempo real. Incluye autenticación segura, paneles de seguimiento y herramientas para facilitar el control financiero del negocio." 
         
          githubLink="https://github.com/AnJoGar/GestionDeCreditos"
          
        />

       </div>


       
        <div className="w-full md:w-1/4">
       <ProjectCard
          src="/phpgt.png"
          title="Gestión de Marcaciones de Empleados — Prueba Técnica (Laravel + Python + PostgreSQL)- EmpresaTiesdi"
          description="Desarrollé una API completa en Laravel para gestionar marcaciones de empleados (ingreso, salida, almuerzo). La solución implementa autenticación con JWT, endpoints RESTful, validaciones de reglas laborales y conexión a base de datos PostgreSQL.
Incluye también un script en Python que genera reportes en formato CSV a partir de un rango de fechas, extrayendo la información directamente desde la base de datos." 
         
          githubLink="https://github.com/AnJoGar/GestionEmpleadosPrueba"
          
        />

       </div>

               <div className="w-full md:w-1/4">
       <ProjectCard
          src="/angP.png"
          title="Explorador de Personajes – Rick & Morty (Angular + REST + GraphQL)- Prueba técnica-Empresa Independiente"
          description="Aplicación web desarrollada en Angular 14+ como parte de una prueba técnica para evaluar habilidades en consumo de APIs REST/GraphQL, manejo avanzado de observables, comunicación entre componentes y optimización de rendimiento.

El sistema permite explorar personajes de la API pública Rick and Morty, visualizar detalles avanzados y gestionar favoritos, integrando funcionalidades UI/UX y lógica de negocio real." 
         
          githubLink="https://github.com/AnJoGar/PruebaTecnicaAngular"
          
        />

       </div>


           

      </div>
    </div>
  );
};

export default Projects;