// components/hero-section.tsx
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center flex-grow text-center px-4 sm:px-6 lg:px-8 bg-white py-12 md:py-20 min-h-screen">
      {/* Main heading for the hero section */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
        Organize Suas <span className="text-blue-600">Cifras</span>
      </h1>
      {/* Sub-heading or continuation of the main heading */}
      <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 sm:mt-4">
        Com Facilidade.
      </h2>
      {/* Descriptive paragraph */}
      <p className="mt-6 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-8 md:max-w-2xl">
        A maneira moderna e minimalista de gerenciar suas cifras de violão e
        guitarra. Acesse, edite e compartilhe suas músicas favoritas de forma
        intuitiva.
      </p>
      {/* Placeholder for Call to Action buttons, can be added later */}
      {/* 
      <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
          <a
            href="#"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 sm:px-8"
          >
            Começar Agora
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-50 sm:px-8"
          >
            Saiba Mais
          </a>
        </div>
      </div>
      */}
    </section>
  );
};

export default HeroSection;
