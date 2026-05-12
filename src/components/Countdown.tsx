"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2025-06-08T09:00:00");

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#F2B705] py-2 flex items-center justify-center gap-6"
    >
      <span className="text-[#050505] text-xs font-bold uppercase tracking-wider hidden sm:block">
        O evento começa em:
      </span>
      <div className="flex items-center gap-3">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span className="text-[#050505] font-black text-lg leading-none tabular-nums">
                {pad(unit.value)}
              </span>
              <span className="text-[#050505]/70 text-[10px] font-semibold uppercase">
                {unit.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="text-[#050505]/60 font-black text-lg leading-none -mt-3">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
