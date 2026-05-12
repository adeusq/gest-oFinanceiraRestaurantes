"use client";

import { motion, type Variants } from "framer-motion";
import {
  TrendingUp,
  BookOpen,
  Wrench,
  Calculator,
  BarChart2,
  Package,
  Percent,
  Tag,
} from "lucide-react";

const topics = [
  {
    icon: TrendingUp,
    title: "Fluxo de Caixa",
    description:
      "Entenda como o dinheiro entra e sai do seu restaurante e mantenha o controle total.",
  },
  {
    icon: BookOpen,
    title: "Plano de Contas",
    description:
      "Organize suas receitas e despesas de forma estruturada e profissional.",
  },
  {
    icon: Wrench,
    title: "Ferramentas Financeiras",
    description:
      "Conheça as principais ferramentas para automatizar e simplificar sua gestão.",
  },
  {
    icon: Calculator,
    title: "Conceitos Contábeis",
    description:
      "Domine os fundamentos contábeis essenciais para qualquer gestor de restaurante.",
  },
  {
    icon: BarChart2,
    title: "DRE na Prática",
    description:
      "Aprenda a ler e interpretar o Demonstrativo de Resultado do Exercício.",
  },
  {
    icon: Package,
    title: "Controle de Estoque",
    description:
      "Minimize perdas e desperdícios com uma gestão eficiente do seu estoque.",
  },
  {
    icon: Percent,
    title: "CMV (Virtual x Real)",
    description:
      "Calcule e compare o custo da mercadoria vendida e identifique desvios.",
  },
  {
    icon: Tag,
    title: "Precificação",
    description:
      "Defina preços estratégicos que garantam rentabilidade e competitividade.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhatYouLearn() {
  return (
    <section id="conteudo" className="py-24 relative">
      {/* Section divider top */}
      <div className="section-divider mb-24 -mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F2B705] text-sm font-bold uppercase tracking-widest mb-3 block">
            Conteúdo do Curso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 underline-gold inline-block pb-2">
            O que você vai aprender
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Conteúdos práticos para transformar números em decisões mais
            inteligentes no seu restaurante.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {topics.map((topic) => (
            <motion.div
              key={topic.title}
              variants={cardVariants}
              className="group relative bg-[#121212] card-gold-border rounded-2xl p-6 flex flex-col gap-4 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#F2B705]/10 group-hover:bg-[#F2B705]/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                <topic.icon
                  size={22}
                  className="text-[#F2B705] group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#F2B705] to-[#ffd84d] rounded-b-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
