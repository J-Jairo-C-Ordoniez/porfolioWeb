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
    const mainContainer = document.querySelector(".scrollProjects");
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
        rootMargin: "0px 0px -20% 0px",
      },
    );

    const items = contentRef.current?.querySelectorAll("article");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeSection]);

  const currentSection = data.find((sec) => sec.id === activeSection);

  const filteredItems =
    currentSection?.items?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  return (
    <div className="flex h-[92vh] text-sm text-gray-200">
      <aside className="hidden w-[20vw] py-4 pr-10 md:block">
        <MMenuDoc
          data={data}
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </aside>

      <main className="scrollbar-hide scrollProjects flex w-[80vw] gap-4 overflow-x-hidden overflow-y-auto pl-20">
        <section className="w-[80%] p-6" ref={contentRef}>
          <header className="z-10 m-auto mb-6 flex w-[80%] items-center justify-between gap-3 rounded-full border border-[#1e1e1e] bg-[#101010] px-6 py-3 text-[#b3b3b3] transition-all duration-75 hover:border-[#00C89620]">
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

        <aside className="sticky top-0 hidden w-[20%] py-4 pl-6 md:block">
          <nav className="sticky top-20 space-y-2 text-sm">
            <ATitleSection
              data={currentSection?.title.toUpperCase() || "SECCIÓN"}
              fontSize="1rem"
            />

            {currentSection?.items.map((item) => (
              <ALinkDoc
                key={item.id}
                data={item}
                href={`#${item.id}`}
                background={parseInt(visibleItem) === item.id && "#00C89615"}
                color={parseInt(visibleItem) === item.id && "#00C896"}
              />
            ))}
          </nav>
        </aside>
      </main>
    </div>
  );
}
