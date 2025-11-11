"use client";
import { useState } from "react";

import { ATitleMain } from "../atoms/aTitle";
import AIcon from "../atoms/aIcon";
import MLogo from "../molecules/mLogo";
import MMenu from "../molecules/mMenu";

export default function OHeader({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex w-full flex-wrap items-center justify-between px-10 py-6 sm:px-12 md:px-20 lg:px-32 xl:px-35">
      <div className="flex items-center gap-2">
        <MLogo data={data.logo} />
        <ATitleMain data={data.name} fontSize="1rem" />
      </div>

      <div className="hidden lg:block">
        {data.menu && <MMenu data={data.menu} />}
      </div>

      <button
        className="cursor-pointer text-[#e0e0e0] transition-transform duration-200 hover:scale-104 focus:outline-none lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menú"
      >
        <AIcon data={isMenuOpen ? "X" : "Menu"} />
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 z-10 w-full bg-[#121212] px-8 py-4 lg:hidden">
          {data.menu && (
            <MMenu
              data={data.menu}
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      )}
    </header>
  );
}
