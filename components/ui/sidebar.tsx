// components/ui/sidebar.tsx
import Link from "next/link";

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
        <div className="p-6 flex-grow">
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-gray-800">CifraManager</h1>
          </div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Todas as Cifras
                </Link>
              </li>
              {/* Placeholder for future dynamic links */}
              <li className="pt-6">
                <span className="px-3 text-xs font-semibold uppercase text-gray-500 tracking-wider">
                  Minhas Cifras
                </span>
              </li>
              <li>
                <Link
                  href="/cifras/exemplo-1" // Example link
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Cifra Exemplo 1
                </Link>
              </li>
              <li>
                <Link
                  href="/cifras/exemplo-2" // Example link
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Cifra Exemplo 2
                </Link>
              </li>
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
