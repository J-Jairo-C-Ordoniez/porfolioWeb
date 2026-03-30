import { ATitleBold } from "../atoms/Title";
import { APicture } from "../atoms/Picture";
import { AText } from "../atoms/Text";
import { ARed } from "../atoms/Red";
import { AIcon } from "../atoms/Icon";

export default function MError404({ title, description, isPage }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="m-auto flex flex-col items-center justify-center p-12 lg:p-24 min-h-[70vh] w-full"
    >
      <div className="w-40 h-40 grayscale contrast-125 mb-12">
        <APicture
          src="/404.png"
          alt="Avatar - Error 404"
          size="100"
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center max-w-xl">
        <ATitleBold
          data={title}
          color="text-text-main"
          textAlign="text-center"
          fontSize="text-2xl lg:text-4xl"
          className="uppercase tracking-widest font-bold"
        />

        <AText
          data={description}
          textAlign="text-center"
          fontSize="text-lg"
          color="text-text-secondary"
          className="opacity-70 leading-relaxed"
        />
      </div>

      <div className="my-12 flex items-center justify-center rounded-none border border-white/5 bg-white/[0.02] px-12 py-6">
        <span className="font-sans font-black text-6xl lg:text-8xl tracking-tighter text-accent/20">
          404
        </span>
      </div>

      {isPage && (
        <div className="mt-8">
          <ARed href='/' className="!px-10 !py-5 bg-accent hover:bg-accent-secondary !text-bg-dark border-none transition-all uppercase tracking-widest text-xs font-bold">
            <AIcon data="ArrowLeft" size={16} />
            <span>Go Back Home</span>
          </ARed>
        </div>
      )}
    </section>
  );
}
