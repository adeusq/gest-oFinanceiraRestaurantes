"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Conteúdo Prático",
    description: "Metodologia aplicada diretamente à realidade dos restaurantes",
  },
  {
    icon: Target,
    title: "Aplicação Real",
    description: "Exercícios e casos reais do setor de food service",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Conecte-se com outros donos e gestores do segmento",
  },
  {
    icon: Zap,
    title: "Estratégias Aplicáveis",
    description: "Ferramentas que você pode implementar já na semana seguinte",
  },
];

export default function AboutEvent() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F2B705]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F2B705] text-sm font-bold uppercase tracking-widest mb-3 block">
            Sobre o evento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Um encontro feito para{" "}
            <span className="gradient-gold">transformar</span> seu restaurante
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Esse é um encontro pensado para donos e gestores que querem ter mais
            controle, clareza e crescimento no financeiro do seu restaurante.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#121212] card-gold-border rounded-2xl p-7 text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#F2B705]/10 group-hover:bg-[#F2B705]/20 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <item.icon
                  size={26}
                  className="text-[#F2B705]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#F2B705] to-[#ffd84d] rounded-b-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
