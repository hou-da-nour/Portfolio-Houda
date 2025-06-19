import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_o3ng71b',        // Remplace par ton service ID
      'template_uqlsymq',       // Remplace par ton template ID
      form.current,
      'Z93w-mLKMuZiYOJQp'         // Remplace par ta clé publique
    )
    .then(() => {
      alert("Message envoyé avec succès !");
      form.current.reset();
    }, (error) => {
      alert("Erreur lors de l'envoi du message.");
      console.error(error.text);
    });
  };

  return (
    <section className="bg-[#F3E8FF] py-20 pt-35 " id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-[#5A189A] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Intéressé(e) à travailler avec moi ?
        </motion.h2>

        <motion.div
          className="mt-8 text-center text-[#10002B]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg font-medium">
            Je suis disponible pour des projets en freelance.<br />
            N'hésitez pas à me contacter directement par téléphone ou par email :
          </p>
          <p className="mt-3 mb-8 text-[#3C096C]">
            📞 <span className="font-semibold">+213 (0) 6 55 41 50 19</span><br />
            📧 <span className="font-semibold">houdijijo@gmail.com</span>
          </p>
        </motion.div>

        {/* Formulaire EmailJS */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white rounded-xl shadow-md p-6 space-y-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-[#7B2CBF] mb-2">Parlons de votre projet !</h3>

          <div>
            <label htmlFor="user_name" className="block text-[#3C096C] font-medium mb-1">Nom complet</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="w-full px-4 py-2 border border-[#D0BFFF] rounded-lg focus:ring-2 focus:ring-[#C77DFF]"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-[#3C096C] font-medium mb-1">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="w-full px-4 py-2 border border-[#D0BFFF] rounded-lg focus:ring-2 focus:ring-[#C77DFF]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[#3C096C] font-medium mb-1">Décrivez votre projet</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-[#D0BFFF] rounded-lg focus:ring-2 focus:ring-[#C77DFF]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#7B2CBF] hover:bg-[#9D4EDD] text-white font-semibold px-6 py-2 rounded-lg transition curson-pointer"
          >
            Recrutez-moi
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
