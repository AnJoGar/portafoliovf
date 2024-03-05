"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
}from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


 
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
          Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
           Hola soy 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Anderson Jordan{" "}
            </span>
           
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Estudiante de 8º semestre de la carrera de software, con habilidades en el área informática, analítica, trabajo en
          grupo y capacidad para resolver problemas. Principalmente interesado en el área del desarrollo de nuevas
          tecnologías, en busca de retos desafiantes en diversas áreas con el objetivo de desarrollar mi perfil profesional.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="/Curriculum1.pdf"  // Reemplaza "cv.pdf" con el nombre de tu archivo PDF
          download="Curriculum1.pdf"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Descargar cv
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-[-80px]"
       
      >
        <Image
          src="/mia1.png"
          alt="work icons"
          height={300}
          width={300}
          className="hidden sm:block"
        />
        <Image
            src="/mia1.png"
            alt="work icons"
            height={300}
            width={300}
            className="block sm:hidden mt-4"
          />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;