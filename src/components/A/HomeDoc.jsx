import { ATitleBold, ATitleSection } from "../ui/Title";
import MHeroDoc from "../molecules/HeroDoc";
import MSectionDoc from "../molecules/SectionDoc";
import MGalleryDoc from "../molecules/GalleryDoc";
import { AText } from "../ui/Text";
import { ARed } from "../ui/Red";
import { AIcon } from "../ui/Icon";

export default function OHomeProject({ data, setState }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, delay: 0.1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="overflow-hidden bg-background">
      <header className="mx-auto max-w-7xl px-10 pt-24 pb-12 lg:pt-32">
        <MHeroDoc data={data.hero} onClick={() => setState("doc")} />
      </header>

      <section
        id="docs"
        ref={sectionRef}
        className="mx-auto max-w-7xl space-y-12 px-10 py-20 opacity-0"
      >
        <div className="flex flex-col gap-4 border-l-2 border-accent pl-6">
          <ATitleSection data="Architecture & Decisions" color="text-accent" fontSize="text-sm uppercase tracking-[0.4em]" />
          <span className="font-sans text-[10px] tracking-widest text-text-secondary opacity-40 lowercase">Documentation and core logic</span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {data.hero.sections.map((section) => (
            <MSectionDoc key={section.id} data={section} />
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-10 py-24">
        <div className="flex flex-col gap-4 border-l-2 border-accent pl-6 mb-16">
          <ATitleSection data="Project Gallery" color="text-accent" fontSize="text-sm uppercase tracking-[0.4em]" />
          <span className="font-sans text-[10px] tracking-widest text-text-secondary opacity-40 lowercase">Visual representation of the work</span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
          {data.hero.gallery.map((item) => (
            <MGalleryDoc key={item.id} data={item} />
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-10 py-32 border-t border-white/5 mt-20">
        <div className="flex flex-col items-center gap-10 text-center bg-white/[0.01] p-16 lg:p-24 border border-white/5">
          <ATitleBold
            data="Interested in the full project?"
            color="text-text-main"
            fontSize="text-2xl lg:text-3xl"
            textAlign="text-center"
            className="uppercase tracking-widest font-black"
          />

          <AText
            data="Access the demo and the repository to explore the implementation, hooks, and architecture details."
            textAlign="text-center"
            color="text-text-secondary"
            className="opacity-70 max-w-2xl leading-relaxed text-lg"
          />

          <ul className="mt-12 flex flex-wrap list-none justify-center gap-8 relative z-10 w-full">
            {data.head.menu.map((link) => (
              <li key={link.id}>
                <ARed href={link.href} className="!px-10 !py-5 transition-all hover:bg-accent hover:text-bg-dark border-white/10 group">
                  <AIcon data={link.icon} size={20} />
                  <span className="font-sans font-caps text-xs tracking-[0.2em] font-bold">{link.text}</span>
                </ARed>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </main>
  );
}
