"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProgressBar from "@ramonak/react-progress-bar";
import Image from 'next/image';
import SkillBar from './SkillBar';
interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
  //  knowledgePercentage: number;
}

const SkillDataProvider: React.FC<Props> = ({ src, width, height, index,/* knowledgePercentage*/} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
  <motion.div
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index}
  transition={{delay: index * animationDelay}}
  >
    <Image
src={src}
width={width}
height={height}
alt='skill image'
    />






  </motion.div>
  
  )
}

export default SkillDataProvider