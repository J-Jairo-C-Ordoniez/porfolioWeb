"use client";

import { useRef, useEffect } from "react";
import { Search } from "lucide-react";

export default function SearchDoc({ currentSection, searchTerm, setSearchTerm }) {
  const inputRef = useRef(false);

  useEffect(() => {
    if (!inputRef.current) return;

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex w-full items-center gap-4">
        <Search />
        <input
          ref={inputRef}
          type="text"
          placeholder={`Buscar en ${currentSection?.title || "documentación"}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-sm text-secondary/80 placeholder-secondary/40 outline-none tracking-wider font-medium"
        />
      </div>

      <div>
        <p className="space-x-2">
          <span className="rounded-md bg-[#0e141d] px-2 py-1">Ctrl</span>
          <span className="rounded-md bg-[#0e141d] px-2 py-1">K</span>
        </p>
      </div>
    </>
  );
}
