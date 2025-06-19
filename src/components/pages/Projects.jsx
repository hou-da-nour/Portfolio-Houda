import React, { useState } from "react";
import { motion } from "framer-motion";

// Images (à personnaliser selon tes fichiers)
import beaImg from "/pc.jpeg";
import mercerieWeb from "/Logo1.png";
import vetementWeb from "/logo.png";
import merceriePub from "/home.jpeg";
import vetementPub from "/hero.jpeg";

const websiteProjects = [
  {
    title: "Site Web - BEA Chatbot",
    description: "Site vitrine pour présenter le chatbot de la BEA.",
    image: beaImg,
    url: "https://hou-da-nour.github.io/Site-web-BEA/", // remplace par ton lien
  },
  {
    title: "Site Web - AGB fidarek",
    description: "Site vitrine pour ouvrir un compte pour la AGB .",
    image: beaImg,
    url: "https://hou-da-nour.github.io/Site-web-BEA/", // remplace par ton lien
  },
  {
    title: "Site Web - Boutique Mercerie",
    description: "Site vitrine pour une mercerie avec un design doux et moderne.",
    image: mercerieWeb,
    url: "https://boutique-mercerie.example.com",
  },
  {
    title: "Site Web - Boutique Vêtements Homme",
    description: "Site moderne et responsive pour une boutique de mode masculine.",
    image: vetementWeb,
    url: "https://vetements-homme.example.com",
  },
];

const instaProjects = [
  {
    title: "Pub Insta - Boutique Mercerie",
    description: "Visuel publicitaire conçu pour Instagram.",
    image: merceriePub,
    url: "https://www.instagram.com/p/mercerie-pub", // remplace par lien ou image
  },
  {
    title: "Pub Insta - Vêtements Homme",
    description: "Création d’un post Insta attractif pour mode masculine.",
    image: vetementPub,
    url: "https://www.instagram.com/p/vetements-homme-pub",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");

  const dataToShow = activeTab === "web" ? websiteProjects : instaProjects;

  return (
    <section className="min-h-screen py-20 bg-[#FDF4FF] pt-35" id="projets">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-[#5A189A] mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mes Projets
        </motion.h2>

        {/* Onglets */}
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setActiveTab("web")}
            className={`pb-2 text-lg font-semibold transition-all border-b-4 cursor-pointer ${
              activeTab === "web"
                ? "border-[#9D4EDD] text-[#9D4EDD]"
                : "border-transparent text-[#3C096C] hover:border-[#E0AAFF]"
            }`}
          >
            Sites Web
          </button>
          <button
            onClick={() => setActiveTab("insta")}
            className={`pb-2 text-lg font-semibold transition-all border-b-4 cursor-pointer ${
              activeTab === "insta"
                ? "border-[#9D4EDD] text-[#9D4EDD]"
                : "border-transparent text-[#3C096C] hover:border-[#E0AAFF]"
            }`}
          >
            Pubs Instagram
          </button>
        </div>

        {/* Cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {dataToShow.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md border border-[#EAD8F4] overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-[#7B2CBF] mb-2">{project.title}</h3>
                <p className="text-[#3C096C]">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
