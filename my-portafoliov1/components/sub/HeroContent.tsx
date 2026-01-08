"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 mt-32 md:mt-40 w-full z-[20] gap-10"
    >
      {/* Contenedor de Texto */}
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start lg:w-3/5">
        
        {/* Badge de Bienvenida con efecto Glassmorphism */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[15px] border border-[#7042f88b] bg-[#08001550] backdrop-blur-md opacity-[0.9] flex items-center w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] tracking-wider uppercase font-medium">
            Developer Portfolio
          </h1>
        </motion.div>

        {/* Título Principal con Gradiente de 3 tonos */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-7xl font-extrabold text-white max-w-[700px] leading-tight"
        >
          <span className="drop-shadow-2xl">
            Hola soy 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-400">
              {" "}
              Anderson Jordan{" "}
            </span>           
          </span>
        </motion.div>

        {/* Párrafo con mejor legibilidad */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[600px] leading-relaxed font-light"
        >
         Desarrollador Full Stack (Ingeniero de software) con experiencia
          en .NET, Angular, React, Flutter, Python y Django.
          Construyo aplicaciones web y móviles end-to-end: APIs REST 
          con autenticación JWT, frontends modernos, dashboards, 
          bases de datos en PostgreSQL/SQL Server y despliegues en AWS,
          Railway y Render.
          Domino frameworks como .NET Core, Angular, React, Django y Laravel, 
          además de integración de IA y optimización de rendimiento. 
          Capaz de desarrollar soluciones completas, escalables y 
          listas para producción.
        </motion.p>

        {/* Botón Mejorado con Glow */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="/Curriculum.pdf"
          download="Curriculum.pdf"
          className="py-3 px-10 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-center text-white cursor-pointer rounded-xl max-w-[220px] relative z-50 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/40 font-bold active:scale-95"
        >
          Descargar CV
        </motion.a>
      </div>

      {/* Contenedor de Imagen con Efectos de Iluminación */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center lg:w-2/5 relative"
      >
        {/* Luces de fondo (Auras) para quitar la simpleza */}
        <div className="absolute h-[300px] w-[300px] bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute h-[200px] w-[200px] bg-cyan-500/10 rounded-full blur-[80px] -z-10 bottom-0 right-10" />
        
        {/* Imagen Desktop con Sombra Perimetral */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <Image
            src="/imgMia.png"
            alt="Anderson Jordan"
            height={400}
            width={400}
            className="hidden sm:block relative rounded-full object-contain drop-shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>

        {/* Imagen Mobile */}
        <Image
          src="/imgMia.png"
          alt="Anderson Jordan"
          height={300}
          width={300}
          className="block sm:hidden mt-4 object-contain drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;