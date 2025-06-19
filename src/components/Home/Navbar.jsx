// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from "/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Fermer le menu après un clic
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }} className="bg-[#5A189A] shadow-md fixed w-full z-50 border-b border-n-6 rounded-b-2xl "
    >
      <div className="max-w-7xl my-3 mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#">
          <img
            src={logo}
            alt="Logo"
            className="w-auto max-h-16 sm:max-h-12 md:max-h-14 object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-[#C77DFF] font-medium gap-3 ">
          <li><a href="#acceuil" className="hover:text-[#E0AAFF]">Accueil</a></li>
          <li><a href="#apropos" className="hover:text-[#E0AAFF]">A propos</a></li>
          <li><a href="#services" className="hover:text-[#E0AAFF]">Services</a></li>
          <li><a href="#projets" className="hover:text-[#E0AAFF]">Projets</a></li>
          <li><a href="#contact" className="hover:text-[#E0AAFF]">Contact</a></li>
        </ul>

        {/* Réseaux sociaux */}
        <div className="flex justify-center items-center space-x-4 py-2 text-[#C77DFF] text-[20px]">
          <a href="https://www.instagram.com/hou.da_h/" className="hover:text-[#E0AAFF]"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/houda-hammachi-773aba336/" className="hover:text-[#E0AAFF]"><FaLinkedin /></a>
          <a href="https://github.com/hou-da-nour" className="hover:text-[#E0AAFF]"><FaGithub /></a>
        </div>

        {/* Burger menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#E0AAFF] focus:outline-none">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
        
      {/* Menu mobile animé */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#7B2CBF] px-4 pb-4 pt-5 space-y-4 text-[#C77DFF] font-medium text-center"
          >
            <li><a href="#acceuil" onClick={handleLinkClick} className="block hover:text-[#E0AAFF]">Accueil</a></li>
            <li><a href="#apropos" onClick={handleLinkClick}  className="block hover:text-[#E0AAFF]">A propos</a></li>
            <li><a href="#services" onClick={handleLinkClick}  className="block hover:text-[#E0AAFF]">Services</a></li>
            <li><a href="#projets" onClick={handleLinkClick} className="block hover:text-[#E0AAFF]">Projets</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className="block hover:text-[#E0AAFF]">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
    
  );
}
