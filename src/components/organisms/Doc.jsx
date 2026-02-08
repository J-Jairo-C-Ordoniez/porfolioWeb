"use client";

import { useState, useEffect, useRef } from "react";
import { ATitleBold, ATitleSection } from "../atoms/Title";
import { ALinkDoc } from "../atoms/Link";
import MMenuDoc from "../molecules/MenuDoc";
import MSearchDoc from "../molecules/SearchDoc";
import AText from "../atoms/Text";
import MCardDoc from "../molecules/CardDoc";
import AIcon from "../atoms/Icon";
import ARed from "../atoms/Red";

export default function ODoc({ data, headData }) {
  const [activeSection, setActiveSection] = useState(data[0]?.id || null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleItem, setVisibleItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisibleItem(entry.target.id);
        });
      },
      {
        threshold: 0.2, 
        rootMargin: "-10% 0px -50% 0px",
      },
    );

    const items = contentRef.current?.querySelectorAll("article");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeSection, searchTerm]); 

  const currentSection = data.find((sec) => sec.id === activeSection);

  const filteredItems =
    currentSection?.items?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  return (
    <div className="flex w-full max-w-[1920px] mx-auto min-h-screen">
      {/* Mobile Menu Button */}
      <button
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#00C896] p-3 shadow-lg lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <AIcon data={isMenuOpen ? "PanelRightOpen" : "PanelLeftOpen"} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#101828] p-6 lg:hidden overflow-y-auto">
          <div className="flex justify-end mb-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <AIcon data="Close" />
            </button>
          </div>
          <MMenuDoc
            data={data}
            setActiveSection={(id) => {
              setActiveSection(id);
              setIsMenuOpen(false);
            }}
            activeSection={activeSection}
          />
        </div>
      )}

      {/* Left Sidebar */}
      <aside className="sticky top-0 h-screen w-64 flex-none overflow-y-auto border-r border-slate-800 hidden lg:block py-8 pl-8 pr-4">
        <MMenuDoc
          data={data}
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-auto min-w-0" ref={contentRef}>
        <div className="max-w-4xl mx-auto px-6 py-10 lg:px-12">
          {/* Search Bar */}
          <div className="mb-12">
            <header className="flex w-full items-center gap-3 rounded-xl border border-slate-700/50 bg-[#1A2534] px-4 py-3 text-slate-400 focus-within:border-[#00C896] focus-within:ring-1 focus-within:ring-[#00C896] transition-all">
              <MSearchDoc
                currentSection={currentSection}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </header>
          </div>

          <div className="space-y-16 pb-20">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <MCardDoc key={item.id} data={item} />
              ))
            ) : (
              <div className="text-center py-20">
                <AText
                  data="No se encontraron resultados para tu búsqueda."
                  color="#b3b3b3"
                  textAlign="center"
                />
              </div>
            )}
          </div>

          {/* Footer with project links */}
          {headData?.menu && (
            <footer className="border-t border-slate-800 mt-16 pt-12 pb-8">
              <ATitleBold
                data="¿Quieres ver el proyecto completo?"
                color="#e0e0e0"
                fontSize="text-xl"
                textAlign="center"
              />

              <AText
                data="Accede al demo y al repositorio para ver la implementación completa."
                textAlign="center"
              />

              <ul className="mt-8 flex flex-wrap list-none justify-center gap-4 relative z-10">
                {headData.menu.map((link) => (
                  <li key={link.id}>
                    <ARed href={link.href}>
                      <AIcon data={link.icon} />
                      <AText data={link.text} textAlign="center" />
                    </ARed>
                  </li>
                ))}
              </ul>
            </footer>
          )}
        </div>
      </main>

      {/* Right Sidebar (TOC) */}
      <aside className="sticky top-0 h-screen w-64 flex-none overflow-y-auto py-10 pr-8 hidden xl:block">
        <div className="pl-4 border-l border-slate-800">
          <ATitleSection
            data="EN ESTA PÁGINA"
            fontSize="text-xs font-semibold tracking-wider"
            color="#9CA3AF"
          />
          <nav className="mt-4 flex flex-col gap-2">
            {currentSection?.items.map((item) => (
              <ALinkDoc
                key={item.id}
                data={item}
                href={`#${item.id}`}
                background="transparent"
                color={
                  visibleItem == item.id ? "#00C896" : "#6B7280"
                }
                className={`text-sm transition-colors hover:text-[#00C896] text-left block py-1 ${visibleItem == item.id ? "font-medium" : ""}`}
              />
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}
