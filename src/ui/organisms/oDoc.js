"use client";

import { useState, useEffect, useRef } from "react";
import { ATitleSection } from "../atoms/aTitle";
import { ALinkDoc } from "../atoms/aLink";
import MMenuDoc from "../molecules/mMenuDoc";
import MSearchDoc from "../molecules/mSearchDoc";
import AText from "../atoms/aText";
import MCardDoc from "../molecules/mCardDoc";

export default function ODoc({ data }) {
  const [activeSection, setActiveSection] = useState(data[0]?.id || null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleItem, setVisibleItem] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisibleItem(entry.target.id);
        })
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px -20% 0px",
      },
    );

    const items = contentRef.current?.querySelectorAll("article")
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeSection]);

  const currentSection = data.find((sec) => sec.id === activeSection);

  const filteredItems =
    currentSection?.items?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  return (
    <div className="flex justify-center scrollProjects">
      <aside className="w-[20vw] h-fit py-4 pr-10 sticky top-0">
        <MMenuDoc
          data={data}
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </aside>

      <main className="scrollbar-hide flex w-[80vw] gap-4 pl-20">
        <section className="w-[80%] p-6 overflow-x-hidden" ref={contentRef}>
          <header className="z-10 m-auto mb-10 flex w-[80%] items-center justify-between gap-3 rounded-full border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 px-6 py-3 text-[#b3b3b3] transition-all duration-75 hover:border-[#00C89620]">
            <MSearchDoc
              currentSection={currentSection}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </header>

          <div className="mt-4 space-y-10 px-20 pb-20">
            {filteredItems.map((item) => (
              <MCardDoc key={item.id} data={item} />
            ))}

            {filteredItems.length === 0 && (
              <AText
                data="No se encontraron resultados para tu búsqueda."
                color="#b3b3b3"
                textAlign="center"
              />
            )}
          </div>
        </section>

        <aside className="w-[20%] h-fit py-4 pl-6 sticky top-0">
          <nav className="space-y-2 text-sm overflow-x-hidden">
            <ATitleSection
              data="EN ESTA SECCIÓN"
              fontSize="text-md"
              color="#999"
            />

            {currentSection?.items.map((item) => (
              <ALinkDoc
                key={item.id}
                data={item}
                href={`#${item.id}`}
                background={parseInt(visibleItem) === item.id && "#00C89615"}
                color={(parseInt(visibleItem) === item.id) ? "#00C896" : "#b3b3b3"}
              />
            ))}
          </nav>
        </aside>
      </main>
    </div>
  );
}
