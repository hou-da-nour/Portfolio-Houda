import React, { useEffect, useState } from 'react';
import heroImg from '/t1.jpeg';
import { motion } from "framer-motion";
import HireMe from "./HireMe"
import HeroExperience from '../HeroModels/HeroExperience';



const Hero = () => {
  const fullText = "Créez votre présence en ligne";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else {
        // Pause, puis redémarrage
        setTimeout(() => {
          setDisplayedText('');
          setIndex(0);
        }, 2000); // 2 sec pause après écriture complète
      }
    }, 100); // vitesse d'écriture

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section
      className=" md:min-h-auto bg-cover bg-center lg:bg-[url('/nour.jpg')] flex items-center justify-center relative overflow-hidden"
      id="acceuil"
    >
      <div className="relative z-10 xl:mt-20 mt-32 md:h-dvh h-[90vh] flex flex-col md:flex-row xl:items-center items-start justify-center w-full">

        {/* Texte */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3C096C] mb-4 leading-tight">
              <span className="text-3xl sm:text-2xl text-[#7B2CBF]">Bonjour ,</span><br />
              <span className="text-[#3C096C]">{displayedText}<span className="animate-pulse">|</span></span>
            </h1>
            <p className="text-base sm:text-lg text-[#7B2CBF] mt-4 font-semibold">
              Je suis développeuse front-end passionnée. Je conçois des portfolios et sites vitrines modernes, responsives, avec un design clair et professionnel.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="pt-8"
            >
              <HireMe />
            </motion.button>
          </motion.div>
        </header>

        {/* Image - visible uniquement sur sm et md, cachée sur lg */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-full flex justify-center mt-6 lg:hidden"
        >
          <img
            src={heroImg}
            alt="Hero"
            className="w-[250px] md:w-[350px]"
          />
        </motion.div>

      </div>
    </section>


  );
};

export default Hero;
