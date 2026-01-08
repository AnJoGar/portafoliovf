"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider: React.FC<Props> = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    const animationDelay = 0.2 // Reducido un poco para mayor fluidez

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay, duration: 0.5 }}
            whileHover={{ scale: 1.15 }} // Efecto de zoom al pasar el mouse
            className="relative group flex items-center justify-center p-4 rounded-2xl bg-[#1a1a1a30] border border-white/[0.05] backdrop-blur-md hover:border-purple-500/50 transition-colors duration-300"
        >
            {/* Resplandor de fondo al hacer hover */}
            <div className="absolute inset-0 bg-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <Image
                src={src}
                width={width}
                height={height}
                alt='skill image'
                className="relative z-10 object-contain drop-shadow-sm group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
            />
        </motion.div>
    )
}

export default SkillDataProvider;