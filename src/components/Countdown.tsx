"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const EVENT_DATE = new Date("2026-06-08T09:00:00");
const PAYMENT_LINK = "https://www.asaas.com/c/blzjkahdcpacqaa2";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    const delay = setTimeout(() => setOpen(true), 1200);
    return () => {
      clearInterval(timer);
      clearTimeout(delay);
    };
  }, []);

  const isOver =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isOver) return null;

  const units = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="relative bg-[#0d0d0d] border border-[#F2B705]/30 rounded-3xl p-10 sm:p-16 max-w-2xl w-full text-center shadow-[0_0_60px_rgba(242,183,5,0.2)] pointer-events-auto">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Label */}
              <span className="inline-block text-[#F2B705] text-xs font-bold uppercase tracking-widest mb-4">
                O evento começa em
              </span>

              {/* Countdown */}
              <div className="flex items-end justify-center gap-4 mb-8">
                {units.map((unit, i) => (
                  <div key={unit.label} className="flex items-end gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-5xl sm:text-6xl font-black text-white tabular-nums leading-none">
                        {pad(unit.value)}
                      </span>
                      <span className="text-[#F2B705]/70 text-xs font-semibold uppercase mt-1">
                        {unit.label}
                      </span>
                    </div>
                    {i < units.length - 1 && (
                      <span className="text-[#F2B705] font-black text-4xl leading-none mb-5">:</span>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="relative">
                <span className="absolute inset-0 rounded-xl bg-[#F2B705] blur-md opacity-40 animate-pulse" />
                <a
                  href={PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-full bg-[#F2B705] hover:bg-[#ffd84d] text-[#050505] font-black text-lg py-4 rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(242,183,5,0.4)] hover:shadow-[0_0_50px_rgba(242,183,5,0.7)]"
                >
                  Garantir minha vaga
                </a>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                Vagas limitadas • 08/06/2026 • R$ 150,00
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
