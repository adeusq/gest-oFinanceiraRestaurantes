"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5585992261287?text=Ol%C3%A1%21+Tenho+interesse+no+curso+de+Gest%C3%A3o+Financeira+para+Restaurantes.";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-200"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
}
