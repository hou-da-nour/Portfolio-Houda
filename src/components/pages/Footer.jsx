import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5A189A] text-[#E0AAFF] pt-10 pb-6 px-6 md:px-20 text-center" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left ">
        {/* Nom et copyright */}
         <div>
          <p className="text-sm">© {new Date().getFullYear()} Tous droits réservés.</p>
         </div>

         {/* Navigation */}
         <div className="flex flex-wrap gap-4 text-sm justify-center">
          <a href="#acceuil" className="hover:underline">Accueil</a>
           <a href="#about" className="hover:underline">À propos</a>
          <a href="#services" className="hover:underline">Services</a>
         <a href="#projects" className="hover:underline">Projets</a>
           <a href="#contact" className="hover:underline">Contact</a>
         </div>

         {/* Réseaux sociaux */}
        <div className="flex space-x-4 text-xl justify-center">
           <a href="https://www.instagram.com/hou.da_h/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram />
           </a>
           <a href="https://www.linkedin.com/in/houda-hammachi-773aba336/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
             <FaLinkedin />
           </a>
           <a href="https://github.com/hou-da-nour" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#5A189A] text-[#E0AAFF] py-6 mt-16 rounded-t-2xl">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
//         {/* Nom et copyright */}
//         <div>
//           <h2 className="text-xl font-semibold">Houda</h2>
//           <p className="text-sm">© {new Date().getFullYear()} Tous droits réservés.</p>
//         </div>

//         {/* Navigation */}
//         <div className="flex flex-wrap gap-4 text-sm justify-center">
//           <a href="#acceuil" className="hover:underline">Accueil</a>
//           <a href="#about" className="hover:underline">À propos</a>
//           <a href="#services" className="hover:underline">Services</a>
//           <a href="#projects" className="hover:underline">Projets</a>
//           <a href="#contact" className="hover:underline">Contact</a>
//         </div>

//         {/* Réseaux sociaux */}
//         <div className="flex space-x-4 text-xl">
//           <a href="https://www.instagram.com/banque_bea/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//             <FaInstagram />
//           </a>
//           <a href="https://dz.linkedin.com/company/banque-ext%C3%A9rieure-d-alg%C3%A9rie" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//             <FaLinkedin />
//           </a>
//           <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//             <FaGithub />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
