'use client'
import { useState } from "react";

import { ATitleMain } from "../atoms/aTitle";
import AIcon from "../atoms/aIcon";
import MLogo from "../molecules/mLogo";
import MMenu from "../molecules/mMenu";

export default function OHeader({ data }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex flex-wrap items-center justify-between w-full py-6 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40">
            <div className="flex items-center gap-2">
                <MLogo data={data.logo} />
                <ATitleMain data={data.name} fontSize="1rem" />
            </div>

            <div className="hidden md:block">
                {data.menu && <MMenu data={data.menu} />}
            </div>

            <button
                className="md:hidden text-[#e0e0e0] focus:outline-none hover:scale-104 transition-transform duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menú"
            >
                <AIcon data={isMenuOpen ? "X" : "Menu"} />
            </button>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#121212] py-4 px-8 md:hidden z-10">
                    {data.menu &&
                        <MMenu
                            data={data.menu}
                            isOpen={isMenuOpen}
                            onClose={() => setIsMenuOpen(false)}
                        />
                    }
                </div>
            )}
        </header>
    )
}