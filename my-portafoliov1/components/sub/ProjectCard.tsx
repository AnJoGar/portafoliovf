"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
interface Props {
  src: string;
  title: string;
  description: string;
  githubLink?: string;
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05,  backgroundColor:  "rgba(71, 64, 121 )"
       }}
    
    className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    
    style={{ cursor: githubLink ? "pointer" : "default", zIndex: 100 }}
    
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        {githubLink && (
          <a
          href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-500 hover:text-blue-700"
            style={{ zIndex: 200 }}
          >
            GitHub
          </a>
        )}





      </div>
    </motion.div>
  );
};

export default ProjectCard;