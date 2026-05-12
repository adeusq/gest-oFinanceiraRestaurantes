"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const PAYMENT_LINK = "https://www.asaas.com/c/blzjkahdcpacqaa2";

export default function CTAFinal() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F2B705]/6 rounded-full blur-3xl" />
      </div>

      {/* Divider */}
      <div className="section-divider mb-24 -mt-24" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Spark icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2B705]/10 border border-[#F2B705]/30 rounded-2xl mb-8">
            <Sparkles size={28} className="text-[#F2B705]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Seu restaurante precisa de mais{" "}
            <span className="gradient-gold text-glow-gold">
              clareza financeira?
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Participe desse encontro e aprenda ferramentas práticas para
            controlar melhor o caixa, entender seus custos e tomar decisões
            mais seguras.
          </p>

          <div className="relative inline-block">
            <span className="absolute inset-0 rounded-xl bg-[#F2B705] blur-lg opacity-60 animate-pulse" />
            <motion.a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 bg-[#F2B705] hover:bg-[#ffd84d] text-[#050505] font-black text-xl px-12 py-6 rounded-xl transition-all duration-200 shadow-[0_0_40px_rgba(242,183,5,0.5)] hover:shadow-[0_0_60px_rgba(242,183,5,0.8)]"
            >
              Garantir minha vaga agora
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Vagas limitadas • 08/06 • 9h às 17h • Amels — Heráclito Graça, 400
          </p>
        </motion.div>
      </div>
    </section>
  );
}
