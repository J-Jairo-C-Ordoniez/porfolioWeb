import { ATitleBold } from "../atoms/Title";
import { APicture } from "../atoms/Picture";
import { AText } from "../atoms/Text";
import { ABtn } from "../atoms/Btn";

export default function MGalleryDoc({ data }) {
  const [open, setOpen] = useState(false);
  const figureRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        figureRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: figureRef.current,
            start: "top 90%",
          },
        }
      );
    }, figureRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <figure
        ref={figureRef}
        className="group relative flex flex-col border border-white/5 bg-white/[0.01] p-8 transition-all duration-500 hover:border-accent hover:bg-white/[0.03] opacity-0"
      >
        <button
          onClick={() => setOpen(true)}
          className="relative mb-6 aspect-video w-full overflow-hidden bg-white/5 border border-white/5"
        >
          <APicture 
            src={data.src} 
            alt={data.title} 
            size="400" 
            className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-bg-dark/40">
            <span className="font-sans font-caps text-[10px] tracking-widest text-accent border border-accent/20 px-4 py-2 backdrop-blur-sm">View Full</span>
          </div>
        </button>

        <AText data={data.description} textAlign="text-center" fontSize="text-xs" color="text-text-secondary" className="opacity-60 italic" />
      </figure>

      {open && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg-dark/95 backdrop-blur-md p-10 lg:p-24"
          onClick={() => setOpen(false)}
        >
          <div 
            className="relative flex flex-col gap-10 max-w-5xl w-full bg-background border border-white/10 p-12 lg:p-20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <figure className="w-full aspect-video overflow-hidden bg-white/5 border border-white/5">
              <APicture src={data.src} alt={data.title} size="800" className="h-full w-full object-contain" />
            </figure>
            
            <div className="flex flex-col gap-4">
              <ATitleBold data={data.title} color="text-text-main" fontSize="text-2xl lg:text-3xl uppercase tracking-widest" />
              <AText data={data.description} fontSize="text-lg" color="text-text-secondary" className="opacity-70 leading-relaxed" />
            </div>

            <div className="flex justify-end pt-8 border-t border-white/5">
              <button
                className="group flex h-12 items-center gap-4 bg-white/[0.05] px-8 transition-all hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                <span className="font-sans font-caps text-[10px] tracking-widest text-text-main group-hover:text-bg-dark">Close Preview</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
