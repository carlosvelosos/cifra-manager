"use client"; // Make it a client component

import Link from "next/link";
import { Pin, PinOff } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname

const songs = [
  { title: "Água da Minha Sede", href: "/zeca-pagodinho/agua-da-minha-sede" },
  {
    title: "Ainda é Tempo de Ser Feliz",
    href: "/zeca-pagodinho/ainda-e-tempo-de-ser-feliz",
  },
  {
    title: "Camarão que Dorme a Onda Leva",
    href: "/zeca-pagodinho/camarao-que-dorme-a-onda-leva",
  },
  {
    title: "Coração em Desalinho",
    href: "/zeca-pagodinho/coracao-em-desalinho",
  },
  {
    title: "Deixa a Vida Me Levar",
    href: "/zeca-pagodinho/deixa-a-vida-me-levar",
  },
  { title: "Faixa Amarela", href: "/zeca-pagodinho/faixa-amarela" },
  { title: "Lama nas Ruas", href: "/zeca-pagodinho/lama-nas-ruas" },
  { title: "Mais Feliz", href: "/zeca-pagodinho/mais-feliz" },
  { title: "Maneiras", href: "/zeca-pagodinho/maneiras" },
  { title: "Não Sou Mais Disso", href: "/zeca-pagodinho/nao-sou-mais-disso" },
  { title: "O Dono da Dor", href: "/zeca-pagodinho/o-dono-da-dor" },
  { title: "Ogum", href: "/zeca-pagodinho/ogum" },
  { title: "Pago pra Ver", href: "/zeca-pagodinho/pago-pra-ver" },
  { title: "Quando a Gira Girou", href: "/zeca-pagodinho/quando-a-gira-girou" },
  { title: "Quem é Ela?", href: "/zeca-pagodinho/quem-e-ela_" },
  { title: "Seu Balancê", href: "/zeca-pagodinho/seu-balance" },
  { title: "Toda Hora", href: "/zeca-pagodinho/toda-hora" },
  { title: "Vacilão", href: "/zeca-pagodinho/vacilao" },
  { title: "Vai Vadiar", href: "/zeca-pagodinho/vai-vadiar" },
  { title: "Verdade", href: "/zeca-pagodinho/verdade" },
];

interface SidebarProps {
  isPinned: boolean;
  onPinToggle: () => void;
}

const Sidebar = ({ isPinned, onPinToggle }: SidebarProps) => {
  const pathname = usePathname(); // Get current pathname

  return (
    <div
      className={`group fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out overflow-hidden ${
        isPinned ? "w-64" : "w-4 hover:w-64"
      }`}
    >
      <aside
        className={`h-full bg-white shadow-lg w-64 
                   border-r border-gray-200
                   flex flex-col
                   transform transition-transform duration-300 ease-in-out
                   ${
                     isPinned
                       ? "translate-x-0"
                       : "translate-x-[-100%] group-hover:translate-x-0"
                   }`}
      >
        <div className="p-6 flex-grow overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-bold text-gray-800">CifraManager</h1>
            <button
              onClick={onPinToggle}
              className="text-gray-500 hover:text-gray-700"
            >
              {isPinned ? <PinOff size={20} /> : <Pin size={20} />}
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors ${
                    pathname === "/"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/zeca-pagodinho"
                  className={`block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors ${
                    pathname === "/zeca-pagodinho"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  }`}
                >
                  Todas as Cifras (Zeca Pagodinho)
                </Link>
              </li>
              <li className="pt-6">
                <span className="px-3 text-xs font-semibold uppercase text-gray-500 tracking-wider">
                  Cifras Zeca Pagodinho
                </span>
              </li>
              {songs.map((song) => (
                <li key={song.href}>
                  <Link
                    href={song.href}
                    className={`block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors ${
                      pathname === song.href
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {song.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="p-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} CifraManager
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
