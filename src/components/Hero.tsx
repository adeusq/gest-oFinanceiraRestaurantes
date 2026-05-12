"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Calendar, Clock, MapPin, DollarSign, ChevronDown } from "lucide-react";

const PAYMENT_LINK = "https://www.asaas.com/c/blzjkahdcpacqaa2";

const infoCards = [
  { icon: Calendar, label: "Data", value: "08/06" },
  { icon: Clock, label: "Horário", value: "9h às 17h" },
  { icon: MapPin, label: "Local", value: "Amels — Heráclito Graça, 400" },
  { icon: DollarSign, label: "Investimento", value: "R$ 150,00" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollToContent = () => {
    const el = document.querySelector("#conteudo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F2B705]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#F2B705]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-[#F2B705]/10 border border-[#F2B705]/30 text-[#F2B705] text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider"
            >
              <span className="w-2 h-2 bg-[#F2B705] rounded-full animate-pulse" />
              Evento Presencial • 08 de Junho
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
            >
              Domine a{" "}
              <span className="gradient-gold text-glow-gold">
                Gestão Financeira
              </span>{" "}
              do Seu Restaurante
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              Um encontro presencial pensado para donos e gestores que querem
              mais <strong className="text-white">controle</strong>,{" "}
              <strong className="text-white">clareza</strong> e{" "}
              <strong className="text-white">crescimento financeiro</strong>.
            </motion.p>

            {/* CTA principal */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative mb-4"
            >
              <span className="absolute inset-0 rounded-2xl bg-[#F2B705] blur-lg opacity-40 animate-pulse" />
              <motion.a
                href={PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center justify-center w-full bg-[#F2B705] hover:bg-[#ffd84d] text-[#050505] font-black text-2xl px-10 py-6 rounded-2xl transition-all duration-200 shadow-[0_0_40px_rgba(242,183,5,0.5)] hover:shadow-[0_0_60px_rgba(242,183,5,0.8)] gap-3"
              >
                Garantir minha vaga agora
              </motion.a>
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-center text-sm text-gray-500 mb-8"
            >
              Vagas limitadas • 08/06 • R$ 150,00
            </motion.p>

            {/* Info cards */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-2 gap-3"
            >
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="flex items-center gap-3 bg-[#121212] card-gold-border rounded-xl p-3"
                >
                  <div className="flex-shrink-0 w-9 h-9 bg-[#F2B705]/10 rounded-lg flex items-center justify-center">
                    <card.icon size={18} className="text-[#F2B705]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      {card.label}
                    </p>
                    <p className="text-sm font-bold text-white leading-tight">
                      {card.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Banner image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-[#F2B705]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <Image
                  src="/POST INSTAGRAM - 2026 (5).png"
                  alt="Gestão Financeira para Restaurantes - Curso Presencial"
                  width={520}
                  height={520}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">
          Role para baixo
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} className="text-[#F2B705]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
