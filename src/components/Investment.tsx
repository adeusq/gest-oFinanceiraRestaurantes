"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

const PAYMENT_LINK = "https://www.asaas.com/c/blzjkahdcpacqaa2";

const includes = [
  "8 módulos de conteúdo prático",
  "Material de apoio completo",
  "Ferramentas financeiras aplicáveis",
  "Certificado de participação",
  "Networking com gestores do setor",
  "Acesso a templates e planilhas",
];

export default function Investment() {
  return (
    <section id="inscricao" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#F2B705]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F2B705]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F2B705] text-sm font-bold uppercase tracking-widest mb-3 block">
            Inscrição
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 underline-gold inline-block pb-2">
            Investimento
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#121212] rounded-3xl overflow-hidden glow-gold"
          >
            {/* Top gold accent bar */}
            <div className="h-1 bg-gradient-to-r from-[#F2B705] via-[#ffd84d] to-[#F2B705]" />

            <div className="p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center">
              {/* Left: Price */}
              <div>
                <p className="text-gray-400 font-medium mb-3">
                  Valor do investimento
                </p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-2xl text-[#F2B705] font-bold">R$</span>
                  <span className="text-7xl sm:text-8xl font-black text-white leading-none">
                    150
                  </span>
                  <span className="text-2xl text-[#F2B705] font-bold mb-2">
                    ,00
                  </span>
                </div>

                {/* Event info summary */}
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    { icon: Calendar, text: "08 de Junho de 2026" },
                    { icon: Clock, text: "9h às 17h" },
                    { icon: MapPin, text: "Amels — Heráclito Graça, 400" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <item.icon size={16} className="text-[#F2B705] flex-shrink-0" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Garanta sua vaga e dê o próximo passo para profissionalizar a
                  gestão financeira do seu restaurante.
                </p>

                <div className="relative">
                  <span className="absolute inset-0 rounded-xl bg-[#F2B705] blur-md opacity-50 animate-pulse" />
                  <motion.a
                    href={PAYMENT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative inline-flex items-center gap-3 w-full justify-center bg-[#F2B705] hover:bg-[#ffd84d] text-[#050505] font-black text-lg px-8 py-5 rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(242,183,5,0.4)] hover:shadow-[0_0_50px_rgba(242,183,5,0.7)]"
                  >
                    Fazer inscrição agora
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.a>
                </div>
              </div>

              {/* Right: Includes */}
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#F2B705]/15">
                <p className="text-[#F2B705] font-bold uppercase text-xs tracking-widest mb-5">
                  O que está incluído
                </p>
                <ul className="flex flex-col gap-4">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-[#F2B705] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
