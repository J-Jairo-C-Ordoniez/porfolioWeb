"use client";

import { useState, useEffect, useRef } from "react";
import Text from "../atoms/aText";
import MenuNavDoc from "../molecules/MenuNavDoc";
import SearchDoc from "../molecules/SearchDoc";
import CardDoc from "../molecules/CardDoc";

export default function DocProject({ documentation }) {
  const [activeSection, setActiveSection] = useState(documentation[0]?.id || null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleItem, setVisibleItem] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const mainContainer = document.querySelector('.scrollProjects');
    if (!mainContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisibleItem(entry.target.id);
        });
      },
      {
        root: mainContainer,
        threshold: 0.05,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    const items = contentRef.current?.querySelectorAll("article");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeSection]);


  const currentSection = documentation.find((sec) => sec.id === activeSection);

  // Filtrado por búsqueda
  const filteredItems =
    currentSection?.items?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="flex h-[92vh] text-sm text-gray-200">
      <aside className="w-[20vw] py-4 pr-10 hidden md:block">
        <MenuNavDoc
          sections={documentation}
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </aside>

      <main className="w-[80vw] pl-20 flex gap-4 overflow-y-auto overflow-x-hidden scrollbar-hide scrollProjects">
        <section className="w-[80%] p-6" ref={contentRef}>
          <header className="w-[80%] m-auto px-6 py-3 rounded-full flex items-center justify-between gap-3 mb-6 bg-[#101010] border-[#1e1e1e] z-10 text-[#b3b3b3] hover:border-[#00C89620] transition-all duration-75 border">
            <SearchDoc
              currentSection={currentSection}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </header>

          <div className="space-y-10 px-20 mt-4 pb-20">
            {filteredItems.map((item) => (
              <CardDoc
                key={item.id}
                item={item}
              />
            ))}

            {filteredItems.length === 0 && (
              <Text
                text="No se encontraron resultados para tu búsqueda."
                color="#b3b3b3"
                fontSize="1rem"
                textAlign="center"
              />
            )}
          </div>
        </section>

        <aside className="w-[20%] hidden md:block py-4 pl-6 sticky top-0">
          <nav className="sticky top-20 space-y-2 text-sm">
            <h3 className="uppercase tracking-wider text-neutral-400 mb-2">
              {currentSection?.title || "Sección"}
            </h3>
            {currentSection?.items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-2 py-1 rounded-l-full transition-colors ${parseInt(visibleItem) === item.id
                  ? "bg-[#00C89615] text-[#00C896]"
                  : "hover:bg-[#00C89605]"
                  }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </aside>
      </main>
    </div>
  );
}