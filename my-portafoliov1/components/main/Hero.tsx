'use client'
import React, { useState, useEffect } from 'react';
import HeroContent from "../sub/HeroContent";
import styled from 'styled-jsx';
const Hero = () =>{

  const [isMobile, setIsMobile] = useState(false);

  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Puedes ajustar este valor según tus necesidades
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);






  return (
    <div className='relative flex flex-col h-full w-full' id="Hero">
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          className='rotate-180 absolute top-[-360px] h-full w-full left-0 z-[1] object-cover'
        >
          <source src='/blackhole.webm' type='video/webm'/>
        </video>
      )}
      <HeroContent/>
    </div>
  );
};
export default Hero;