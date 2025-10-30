'use client'

import { useRef, useEffect } from "react";
import { Search } from "lucide-react";

export default function MSearchDoc({ currentSection, searchTerm, setSearchTerm }) {
    const inputRef = useRef(false)

    useEffect(() => {
        if (!inputRef.current) return

        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                inputRef.current.focus()
            };
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    return (
        <>
            <div className="flex gap-4 items-center w-[90%]">
                <Search />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={`Buscar en ${currentSection?.title || "documentación"}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[80%] bg-transparent outline-none text-sm text-[#e0e0e0] placeholder-[#b3b3b3]"
                />
            </div>

            <div>
                <p className="space-x-2">
                    <span className="bg-[#090909] px-2 py-1 rounded-md">Ctrl</span>
                    <span className="bg-[#090909] px-2 py-1 rounded-md">K</span>
                </p>
            </div>
        </>
    )
}