"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingDown, LayoutDashboard, Search, BarChart } from "lucide-react";

const bullets = [
  {
    icon: TrendingDown,
    text: "Para quem sente que vende, mas não sabe se realmente lucra",
  },
  {
    icon: LayoutDashboard,
    text: "Para quem quer organizar o caixa e reduzir perdas",
  },
  {
    icon: Search,
    text: "Para quem precisa entender CMV, estoque, DRE e precificação",
  },
  {
    icon: BarChart,
    text: "Para quem quer sair do achismo e decidir com base em números",
  },
];

export default function TargetAudience() {
  return (
    <section id="sobre" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2B705]/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F2B705]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#F2B705] text-sm font-bold uppercase tracking-widest mb-3 block">
              Público-alvo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Para quem é esse{" "}
              <span className="gradient-gold">curso?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Este curso é para{" "}
              <strong className="text-white">donos, gestores e profissionais</strong>{" "}
              de restaurantes que querem entender melhor os números do negócio,
              organizar o financeiro e tomar decisões com mais segurança.
            </p>
          </motion.div>

          {/* Right: Bullet cards */}
          <div className="flex flex-col gap-4">
            {bullets.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-4 bg-[#121212] card-gold-border rounded-xl p-5"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#F2B705]/10 group-hover:bg-[#F2B705]/20 rounded-lg flex items-center justify-center transition-colors duration-300 mt-0.5">
                  <item.icon size={20} className="text-[#F2B705]" />
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#F2B705] flex-shrink-0 mt-0.5"
                  />
                  <p className="text-gray-200 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
