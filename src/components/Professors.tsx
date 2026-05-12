"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const professors = [
  {
    name: "Tauan Rocha",
    photo: "/prof-tauan-rocha.png",
    role: "Especialista em Gestão Financeira",
  },
  {
    name: "Matheus Góes",
    photo: "/prof-matheus-goes.png",
    role: "Consultor de Negócios",
  },
  {
    name: "Bruno Almeida",
    photo: "/prof-bruno-almeida.png",
    role: "Especialista em Controladoria",
  },
  {
    name: "Geslânio Costa",
    photo: "/prof-geslanio-costa.png",
    role: "Consultor Financeiro",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Professors() {
  return (
    <section id="professores" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F2B705] text-sm font-bold uppercase tracking-widest mb-3 block">
            Quem vai ensinar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 underline-gold inline-block pb-2">
            Professores
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto">
            Profissionais experientes com vivência real no mercado de
            restaurantes e consultoria empresarial.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {professors.map((prof) => (
            <motion.div
              key={prof.name}
              variants={cardVariants}
              className="group relative bg-[#121212] card-gold-border rounded-2xl p-8 flex flex-col items-center text-center gap-5 overflow-hidden"
            >
              {/* Avatar photo */}
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-[#F2B705]/40 group-hover:ring-[#F2B705] transition-all duration-300 shadow-lg">
                  <Image
                    src={prof.photo}
                    alt={prof.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glow ring on hover */}
                <div className="absolute -inset-1 rounded-full bg-[#F2B705]/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {prof.name}
                </h3>
                <p className="text-sm text-[#F2B705] font-medium">
                  {prof.role}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#F2B705] to-[#ffd84d] rounded-b-2xl transition-all duration-500" />

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
