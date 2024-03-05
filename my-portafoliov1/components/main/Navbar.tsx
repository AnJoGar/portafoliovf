"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";


const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

    return (
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#Hero"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />
  
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Frontend Developer 
            </span>
          </a>

           {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer">
          <Image
            src="/menu.png"  // Reemplaza con tu ícono de menú
            alt="menu"
            width={30}
            height={30}
            onClick={toggleMobileMenu}
          />
        </div>
  
 {/* Desktop Navigation */}
 <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#Hero"
              className="font-bold cursor-pointer hover:text-[#007296] transition-colors duration-50"
            >
              Acerca de mi
            </a>
            <a
              href="#skills"
              className="font-bold cursor-pointer hover:text-[#007296] transition-colors duration-50"
            >
              Habilidades
            </a>
            <a
              href="#projects"
              className="font-bold cursor-pointer hover:text-[#007296] transition-colors duration-50"
            >
              Proyectos
            </a>
          </div>
        </div>
       

  

 {/* Mobile Navigation */}
 {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[65px] left-[-15px] w-full bg-[#03001417] border-b border-[#2A0E61]/50">
            <div className="flex flex-col items-center py-3">
              <a
                href="#Hero"
                className="font-bold cursor-pointer text-black hover:text-[#007296] transition-colors duration-50 py-2"
                onClick={toggleMobileMenu}
              >
                Acerca de mi
              </a>
              <a
                href="#skills"
                className="font-bold cursor-pointer text-black hover:text-[#007296] transition-colors duration-50 py-2"
                onClick={toggleMobileMenu}
              >
                Habilidades
              </a>
              <a
                href="#projects"
                className="font-bold cursor-pointer text-black hover:text-[#007296] transition-colors duration-50 py-2"
                onClick={toggleMobileMenu}
              >
                Proyectos
              </a>
            </div>
          </div>
        )}

          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;