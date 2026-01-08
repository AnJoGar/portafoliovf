"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { RxGithubLogo, RxExternalLink } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink?: string;
  Link?: string;
}

const ProjectCard = ({ src, title, description, githubLink, Link }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl shadow-2xl border border-[#2A0E61] bg-[#0b0518] transition-all duration-300 h-full flex flex-col"
      style={{ zIndex: 50 }}
    >
      {/* Contenedor de Imagen con corrección de color */}
      <div className="relative overflow-hidden aspect-video bg-[#1a1a2e]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        {/* Este overlay ayuda a que las imágenes claras se oscurezcan y unifiquen con el fondo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518] via-transparent to-transparent opacity-80" />
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="flex flex-col flex-grow p-6 z-[60]">
        <h1 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h1>
        
        <p className="mt-3 text-gray-400 text-[14px] leading-relaxed flex-grow">
          {description}
        </p>

        {/* Botones Estilizados para evitar el azul genérico */}
        <div className="flex items-center gap-3 mt-6">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all active:scale-90"
              onClick={(e) => e.stopPropagation()}
            >
              <RxGithubLogo className="w-4 h-4" />
              GitHub
            </a>
          )}

          {Link && (
            <a
              href={Link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:brightness-110 transition-all active:scale-90 shadow-lg shadow-purple-500/20"
            >
              <RxExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;