import Image from "next/image";
import { MapPin, Clock, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#F2B705]/15 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo & Realização */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative h-10 w-44">
              <Image
                src="/logo-login.png"
                alt="Liberdata Consultoria Empresarial"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-gray-400">
              <span className="text-[#F2B705] font-semibold">Realização:</span>{" "}
              Liberdata Consultoria Empresarial
            </p>
            <p className="text-sm text-gray-400">
              <span className="text-[#F2B705] font-semibold">Apoio:</span>{" "}
              Cardápio Web
            </p>
          </div>

          {/* Event info */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-xs text-[#F2B705] font-bold uppercase tracking-widest mb-1">
              Informações do evento
            </p>
            {[
              { icon: Calendar, text: "08/06 • 2025" },
              { icon: Clock, text: "9h às 17h" },
              { icon: MapPin, text: "Amels — Heráclito Graça, 400" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-gray-400 text-sm"
              >
                <item.icon size={14} className="text-[#F2B705]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            © 2025 Liberdata Consultoria Empresarial. Todos os direitos
            reservados.
          </p>
          <p className="text-[#F2B705]/60">
            Gestão Financeira para Restaurantes
          </p>
        </div>
      </div>
    </footer>
  );
}
