"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Tag,
  X,
} from "lucide-react";

const PAYMENT_LINK = "https://www.asaas.com/c/blzjkahdcpacqaa2";
const COUPON_LINK = "https://www.asaas.com/c/j54s0l01olbjx5lp";
const VALID_COUPON = "PEKENO";

const includes = [
  "8 módulos de conteúdo prático",
  "Material de apoio completo",
  "Ferramentas financeiras aplicáveis",
  "Certificado de participação",
  "Networking com gestores do setor",
  "Acesso a templates e planilhas",
];

export default function Investment() {
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [couponState, setCouponState] = useState<"idle" | "valid" | "invalid">("idle");

  const activeLink = couponState === "valid" ? COUPON_LINK : PAYMENT_LINK;

  function applyCoupon() {
    if (couponInput.trim().toUpperCase() === VALID_COUPON) {
      setCouponState("valid");
    } else {
      setCouponState("invalid");
    }
  }

  function removeCoupon() {
    setCouponInput("");
    setCouponState("idle");
    setShowCoupon(false);
  }

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
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-2xl text-[#F2B705] font-bold">R$</span>
                  <span className={`font-black leading-none transition-all duration-300 ${couponState === "valid" ? "text-5xl sm:text-6xl text-gray-500 line-through" : "text-7xl sm:text-8xl text-white"}`}>
                    150
                  </span>
                  <span className={`font-bold mb-2 transition-all duration-300 ${couponState === "valid" ? "text-lg text-gray-500 line-through" : "text-2xl text-[#F2B705]"}`}>
                    ,00
                  </span>
                  {couponState === "valid" && (
                    <div className="flex items-end gap-1 ml-2">
                      <span className="text-2xl text-[#F2B705] font-bold">R$</span>
                      <span className="text-7xl sm:text-8xl font-black text-white leading-none">135</span>
                      <span className="text-2xl text-[#F2B705] font-bold mb-2">,00</span>
                    </div>
                  )}
                </div>

                {couponState === "valid" && (
                  <p className="text-green-400 text-sm font-semibold mb-4">
                    Cupom aplicado — 10% de desconto
                  </p>
                )}

                {/* Event info summary */}
                <div className="flex flex-col gap-3 mb-6">
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

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Garanta sua vaga e dê o próximo passo para profissionalizar a
                  gestão financeira do seu restaurante.
                </p>

                {/* Coupon */}
                <div className="mb-4">
                  {couponState !== "valid" && (
                    <button
                      onClick={() => setShowCoupon(!showCoupon)}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#F2B705] transition-colors cursor-pointer mb-3"
                    >
                      <Tag size={14} />
                      Tem um cupom de desconto?
                    </button>
                  )}

                  <AnimatePresence>
                    {showCoupon && couponState !== "valid" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex gap-2 mb-1">
                          <input
                            type="text"
                            value={couponInput}
                            onChange={(e) => {
                              setCouponInput(e.target.value.toUpperCase());
                              setCouponState("idle");
                            }}
                            onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                            placeholder="Digite o cupom"
                            className="flex-1 bg-[#0a0a0a] border border-[#F2B705]/20 focus:border-[#F2B705]/60 text-white text-sm px-4 py-2.5 rounded-lg outline-none transition-colors placeholder:text-gray-600 uppercase"
                          />
                          <button
                            onClick={applyCoupon}
                            className="bg-[#F2B705] hover:bg-[#ffd84d] text-[#050505] font-bold text-sm px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                          >
                            Aplicar
                          </button>
                        </div>
                        {couponState === "invalid" && (
                          <p className="text-red-400 text-xs">Cupom inválido. Tente novamente.</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {couponState === "valid" && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-green-400/10 border border-green-400/30 text-green-400 font-bold px-3 py-1 rounded-full uppercase">
                        {VALID_COUPON}
                      </span>
                      <button onClick={removeCoupon} className="text-gray-500 hover:text-white transition-colors cursor-pointer">
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="relative">
                  <span className="absolute inset-0 rounded-xl bg-[#F2B705] blur-md opacity-50 animate-pulse" />
                  <motion.a
                    href={activeLink}
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
