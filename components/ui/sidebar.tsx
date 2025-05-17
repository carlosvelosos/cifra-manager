// components/ui/sidebar.tsx
import Link from "next/link";

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

const Sidebar = () => {
  return (
    // This 'group' div acts as the hoverable area at the very left edge of the screen.
    // It's initially narrow (w-4) and expands on hover (hover:w-64), triggering the sidebar to show.
    // overflow-hidden is crucial to clip the sidebar when it's translated out.
    <div className="group fixed top-0 left-0 h-full z-40 w-4 hover:w-64 transition-all duration-300 ease-in-out overflow-hidden">
      {/* The actual sidebar content container. It has a fixed width (w-64). */}
      {/* It slides in from the left (translate-x-[-100%]) to visible (group-hover:translate-x-0) */}
      {/* when the parent 'group' div is hovered. */}
      <aside
        className="h-full bg-white shadow-lg w-64 
                   border-r border-gray-200
                   flex flex-col
                   transform transition-transform duration-300 ease-in-out
                   translate-x-[-100%] group-hover:translate-x-0"
      >
        {/* Sidebar header and navigation */}
        <div className="p-6 flex-grow overflow-y-auto">
          {" "}
          {/* Added overflow-y-auto */}
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-gray-800">CifraManager</h1>
          </div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/zeca-pagodinho"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Todas as Cifras (Zeca Pagodinho)
                </Link>
              </li>
              {/* Placeholder for future dynamic links */}
              <li className="pt-6">
                <span className="px-3 text-xs font-semibold uppercase text-gray-500 tracking-wider">
                  Cifras Zeca Pagodinho
                </span>
              </li>
              {songs.map((song) => (
                <li key={song.href}>
                  <Link
                    href={song.href}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  >
                    {song.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Sidebar footer */}
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
