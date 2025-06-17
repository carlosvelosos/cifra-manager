"use client";

import { useState, useEffect, useRef } from "react";

interface HeroSectionProps {
  isAnimated?: boolean;
  onShowSearch?: () => void;
  onHideSearch?: () => void;
}

const HeroSection = ({
  isAnimated = false,
  onShowSearch,
  onHideSearch,
}: HeroSectionProps) => {
  const [isOpacityReduced, setIsOpacityReduced] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const handleMouseMove = () => {
      // Trigger animation on mouse move
      setIsOpacityReduced(true);
      onShowSearch?.();

      // Clear existing timeouts
      const currentTimeout = timeoutRef.current;
      const currentInactivityTimeout = inactivityTimeoutRef.current;

      if (currentTimeout) {
        clearTimeout(currentTimeout);
        timeoutRef.current = null;
      }
      if (currentInactivityTimeout) {
        clearTimeout(currentInactivityTimeout);
        inactivityTimeoutRef.current = null;
      }

      // Set new timeout to revert animation after 5 seconds of no movement
      inactivityTimeoutRef.current = setTimeout(() => {
        setIsOpacityReduced(false);
        onHideSearch?.();
      }, 5000);
    };

    const handleKeydown = () => {
      // Reset the inactivity timer on any key press
      if (isOpacityReduced) {
        const currentInactivityTimeout = inactivityTimeoutRef.current;
        if (currentInactivityTimeout) {
          clearTimeout(currentInactivityTimeout);
          inactivityTimeoutRef.current = null;
        }

        inactivityTimeoutRef.current = setTimeout(() => {
          setIsOpacityReduced(false);
          onHideSearch?.();
        }, 5000);
      }
    }; // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeydown);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeydown);
      const timeout = timeoutRef.current;
      const inactivityTimeout = inactivityTimeoutRef.current;
      if (timeout) {
        clearTimeout(timeout);
      }
      if (inactivityTimeout) {
        clearTimeout(inactivityTimeout);
      }
    };
  }, [isOpacityReduced, onShowSearch, onHideSearch]);

  // Sync with external animation state
  useEffect(() => {
    setIsOpacityReduced(isAnimated);
  }, [isAnimated]);

  return (
    <section
      className={`flex flex-col items-center justify-center h-screen text-center px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ease-in-out ${
        isOpacityReduced ? "opacity-5" : ""
      }`}
    >
      {/* Main heading for the hero section */}
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 transition-all duration-1000 ease-in-out ${
          isOpacityReduced ? "transform -translate-y-20 opacity-0" : ""
        }`}
      >
        Organize Suas <span className="text-blue-600">Cifras</span>
      </h1>
      {/* Sub-heading or continuation of the main heading */}
      <h2
        className={`mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 sm:mt-4 transition-all duration-1000 ease-in-out ${
          isOpacityReduced ? "transform -translate-y-20 opacity-0" : ""
        }`}
      >
        Com Facilidade.
      </h2>
      {/* Descriptive paragraph */}
      <p
        className={`mt-6 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-8 md:max-w-2xl transition-all duration-1000 ease-in-out ${
          isOpacityReduced ? "transform translate-y-20 opacity-0" : ""
        }`}
      >
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
        </div>      </div>      */}
    </section>
  );
};

export default HeroSection;
