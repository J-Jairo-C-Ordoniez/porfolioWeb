import { ATitleBold } from "../atoms/Title";
import { ABtnBold, ABtnCTA } from "../atoms/Btn";
import { AText } from "../atoms/Text";
import { ALabel } from "../atoms/Label";
import { APicture } from "../atoms/Picture";

export default function MHeroDoc({ data, onClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      );
      gsap.fromTo(
        ".hero-image",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, delay: 0.3, duration: 1.2, ease: "expo.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col items-center justify-between lg:flex-row gap-16 lg:gap-24"
    >
      <div className="hero-content flex flex-col gap-8 w-full lg:w-[65%] opacity-0">
        <ATitleBold
          data={data.title}
          color="text-text-main"
          fontSize="text-4xl sm:text-5xl lg:text-6xl"
          className="font-black tracking-tighter uppercase"
        />

        <AText
          data={data.description}
          fontSize="text-lg lg:text-xl"
          color="text-text-secondary"
          className="opacity-70 leading-relaxed max-w-2xl"
        />

        <div className="mt-4 flex flex-wrap items-center gap-8">
          <ABtnCTA data={data.Btn} onClick={onClick} />
          <ABtnBold data={data.link} />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {data.tecnologies?.map((label) => (
            <ALabel key={label.id} data={label} />
          ))}
        </div>
      </div>

      <figure
        className="hero-image flex h-72 w-72 lg:h-96 lg:w-96 items-center justify-center border border-white/5 bg-white/[0.01] p-12 opacity-0 grayscale contrast-125"
      >
        <APicture src={data.logo} alt={data.title} size="200" />
      </figure>
    </section>
  );
}