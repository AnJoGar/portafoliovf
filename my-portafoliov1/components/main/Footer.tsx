"use client";
import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer
      /* CAMBIO PRINCIPAL: 
         Añadimos 'pt-20' (padding-top) para separar la línea del contenido de arriba 
         y 'mt-10' para asegurar un margen externo.
      */
      className="w-full bg-[#03001410] backdrop-blur-md text-gray-200 border-t border-[#2A0E61] pt-24 pb-10 relative z-[50] mt-10"
      id="footer"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        
        {/* Contenedor de Secciones */}
        <div className="w-full flex flex-row items-start justify-around flex-wrap mb-14 gap-8">
          
          {/* Comunidad */}
          <div className="flex flex-col items-center sm:items-start min-w-[150px]">
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[18px] mb-6">
              Community
            </h3>
            <a
              href="https://github.com/AnJoGar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-row items-center my-2 hover:text-purple-400 transition-colors duration-300"
            >
              <RxGithubLogo className="text-xl group-hover:scale-110 transition-transform" />
              <span className="text-[15px] ml-3">Github</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center sm:items-start min-w-[150px]">
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[18px] mb-6">
              Social Media
            </h3>
            <a
              href="https://www.linkedin.com/in/anderson-jordan-175591268/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-row items-center my-2 hover:text-cyan-400 transition-colors duration-300"
            >
              <RxLinkedinLogo className="text-xl group-hover:scale-110 transition-transform" />
              <span className="text-[15px] ml-3">LinkedIn</span>
            </a>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center sm:items-start min-w-[150px]">
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[18px] mb-6">
              Contact
            </h3>
            <div className="flex flex-row items-center my-2 group">
              <HiOutlineMail className="text-xl group-hover:text-purple-400 transition-colors" />
              <span className="text-[15px] ml-3 text-gray-400 group-hover:text-gray-200 transition-colors select-all cursor-text">
                andjor2019@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Línea Divisoria Inferior sutil */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A0E61] to-transparent mb-8 opacity-50" />

        {/* Copyright */}
        <div className="text-[14px] text-gray-500 text-center font-light tracking-wide">
          &copy; Anderson Jordan 2024. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;