"use client";

import { useState, useEffect, useRef } from "react";
import { ATitleBold, ATitleSection } from "../structure/main/ui/Title";
import { ALinkDoc } from "../structure/main/ui/Link";
import MMenuDoc from "../structure/main/ui/MenuDoc";
import MSearchDoc from "../structure/main/ui/SearchDoc";
import { AText } from "../structure/main/ui/Text";
import MCardDoc from "../structure/main/ui/CardDoc";
import { AIcon } from "../structure/main/ui/Icon";
import { ARed } from "../structure/main/ui/Red";

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
    <div className="flex w-full max-w-[1920px] mx-auto min-h-screen bg-background">
      {/* Mobile Menu Button */}
      <button
        className="fixed bottom-10 right-10 z-50 flex h-14 w-14 items-center justify-center bg-accent text-bg-dark shadow-2xl lg:hidden transition-transform active:scale-95"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <AIcon data={isMenuOpen ? "PanelRightOpen" : "PanelLeftOpen"} size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background p-10 lg:hidden overflow-y-auto">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsMenuOpen(false)} className="text-text-main opacity-60 hover:opacity-100">
              <AIcon data="Close" size={32} />
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
      <aside className="sticky top-0 h-screen w-80 flex-none overflow-y-auto border-r border-white/5 hidden lg:block py-16 pl-12 pr-6 bg-white/[0.01]">
        <MMenuDoc
          data={data}
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-auto min-w-0" ref={contentRef}>
        <div className="max-w-4xl mx-auto px-8 py-20 lg:px-16">
          {/* Search Bar */}
          <div className="mb-20">
            <header className="flex w-full items-center gap-4 border border-white/5 bg-white/[0.02] px-6 py-4 text-text-secondary focus-within:border-accent transition-all">
              <MSearchDoc
                currentSection={currentSection}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </header>
          </div>

          <div className="flex flex-col gap-24 pb-32">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <MCardDoc key={item.id} data={item} />
              ))
            ) : (
              <div className="text-center py-32 border border-dashed border-white/5">
                <AText
                  data="No results found for your search."
                  color="text-text-secondary"
                  textAlign="text-center"
                  className="italic opacity-60"
                />
              </div>
            )}
          </div>

          {/* Footer with project links */}
          {headData?.menu && (
            <footer className="border-t border-white/5 mt-32 pt-20 pb-12">
              <div className="flex flex-col items-center gap-8 text-center bg-white/[0.01] p-12 lg:p-16 border border-white/5">
                <ATitleBold
                  data="Explore the full project"
                  color="text-text-main"
                  fontSize="text-2xl"
                  textAlign="text-center"
                  className="uppercase tracking-widest font-bold"
                />

                <AText
                  data="Access the demo and the repository to see the full implementation and logic."
                  textAlign="text-center"
                  color="text-text-secondary"
                  className="opacity-70 max-w-lg leading-relaxed"
                />

                <div className="mt-4 flex flex-wrap list-none justify-center gap-6 relative z-10 w-full">
                  {headData.menu.map((link) => (
                    <ARed key={link.id} href={link.href} className="!px-8 !py-4 transition-all hover:bg-accent hover:text-bg-dark border-white/10">
                      <AIcon data={link.icon} size={18} />
                      <span className="font-sans font-caps text-xs tracking-widest font-bold">{link.text}</span>
                    </ARed>
                  ))}
                </div>
              </div>
            </footer>
          )}
        </div>
      </main>

      {/* Right Sidebar (TOC) */}
      <aside className="sticky top-0 h-screen w-72 flex-none overflow-y-auto py-20 pr-12 hidden xl:block">
        <div className="pl-6 border-l border-white/5">
          <ATitleSection
            data="ON THIS PAGE"
            fontSize="text-[10px] font-caps tracking-[0.3em]"
            color="text-text-secondary"
            className="opacity-40"
          />
          <nav className="mt-8 flex flex-col gap-3">
            {currentSection?.items.map((item) => (
              <ALinkDoc
                key={item.id}
                data={item}
                href={`#${item.id}`}
                color={
                  visibleItem == item.id ? "text-accent" : "text-text-secondary"
                }
                className={`text-[12px] transition-colors hover:text-accent text-left block py-1 font-sans ${visibleItem == item.id ? "font-bold tracking-tight" : "opacity-60"}`}
              />
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}
