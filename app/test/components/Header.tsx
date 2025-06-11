"use client";

export default function Header() {
  return (
    <>
      {/* Logo/Title Section */}
      <div className="mb-8 text-center">
        <h1 className="text-6xl font-light text-gray-800 mb-2">
          Cifra<span className="font-normal">Manager</span>
        </h1>
        <p className="text-lg text-gray-600">
          Busque cifras no CifraClub via Google
        </p>
      </div>
    </>
  );
}
