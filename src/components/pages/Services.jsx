import React from "react";
import { motion } from "framer-motion";
import { Code, Paintbrush, FileText } from "lucide-react"; // icônes modernes

const services = [
  {
    title: "Développement Web",
    description:
      "Création de sites modernes et responsives avec HTML, CSS, JavaScript et React. Optimisation pour l'expérience utilisateur.",
    icon: <Code className="w-8 h-8 text-[#7B2CBF]" />,
  },
  {
    title: "Design pour les Réseaux Sociaux",
    description:
      "Création de visuels impactants pour Instagram : publications, carrousels, stories et publicités avec un design professionnel et cohérent.",
    icon: <Paintbrush className="w-8 h-8 text-[#7B2CBF]" />,
  },
  {
    title: "Bureautique",
    description:
      "Maîtrise de Microsoft Word, PowerPoint pour la création de documents professionnels, rapports et présentations.",
    icon: <FileText className="w-8 h-8 text-[#7B2CBF]" />,
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-[#e2c3f4] py-20 px-6 pt-35" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-[#5A189A] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mes Services
        </motion.h2>
        <motion.p
          className="text-[#3C096C] text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Voici ce que je propose pour vous accompagner dans votre présence numérique.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#C77DFF] rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-[#E5D4F3]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#7B2CBF] mb-2">{service.title}</h3>
              <p className="text-[#3C096C] text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
