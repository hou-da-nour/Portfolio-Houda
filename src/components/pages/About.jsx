import React, { useState } from "react";
import { motion } from "framer-motion";
import profilHouda from "/home.jpeg"; // mets ici ton image

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="min-h-screen bg-[#E0AAFF] py-20 px-6 pt-35 " id="apropos">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profilHouda}
            alt="Houda"
            className="w-[250px] sm:w-[300px] rounded-full border-4 border-[#E0AAFF] shadow-lg"
          />
        </motion.div>

        {/* Texte + boutons */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#240046] mb-4">À propos de moi</h2>
          <p className="text-[#240046] text-lg leading-relaxed mb-4">
            Je m'appelle <strong>Houda</strong>, étudiante en <strong>informatique à l'USTHB</strong> et passionnée par la création d’expériences numériques modernes et accessibles.
          </p>
          <p className="text-[#240046] text-lg leading-relaxed mb-4">
            Je me spécialise dans le <strong>développement web front-end</strong>, tout en ayant un intérêt pour le <strong>design UI/UX</strong> ainsi que les outils bureautiques comme <strong>Word</strong> et <strong>PowerPoint</strong>.
          </p>

          {/* Boutons */}
          <div className="flex flex-row gap-4 mt-6 cursor-pointer">
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
                activeTab === "skills"
                  ? "bg-[#3C096C] text-[#C77DFF]"
                  : "bg-[#E0AAFF] text-[#3C096C] border border-[#3C096C]"
              }`}
            >
              Main skills
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
                activeTab === "education"
                  ? "bg-[#3C096C] text-[#C77DFF]"
                  : "bg-[#E0AAFF] text-[#3C096C] border border-[#3C096C]"
              }`}
            >
              Education
            </button>
          </div>

          {/* Contenu dynamique */}
          <div className="mt-6 text-[#240046] text-base sm:text-lg">
            {activeTab === "skills" && (
              <ul className="list-disc pl-5 space-y-2">
                <li>Développement Frontend : HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
                <li>Design UI/UX : Canva</li>
                <li>Outils bureautiques : Word, PowerPoint</li>
              </ul>
            )}
            {activeTab === "education" && (
              <div>
                <p><strong>Université :</strong> USTHB (Université des Sciences et de la Technologie Houari Boumediène)</p>
                <p><strong>Spécialité :</strong> Informatique - Développement logiciel</p>
                <p><strong>Niveau :</strong> Étudiante en fin de cycle</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
