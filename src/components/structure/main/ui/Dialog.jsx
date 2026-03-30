import { ATitleBold } from "../atoms/Title";
import { AText } from "../atoms/Text";
import { AIcon } from "../atoms/Icon";

export default function MDialog({ data, open, setOpen }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const dialogEl = dialogRef.current;
      if (dialogEl && !dialogEl.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, setOpen]);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (open) {
      gsap.fromTo(
        dialogRef.current,
        { opacity: 0, y: 10, display: "none" },
        {
          opacity: 1,
          y: 0,
          display: "block",
          duration: 0.5,
          ease: "expo.out"
        }
      );
    } else {
      gsap.to(dialogRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (dialogRef.current) dialogRef.current.style.display = "none";
        }
      });
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      open={true}
      className="fixed inset-0 m-auto z-[200] max-w-lg border border-white/5 bg-background p-12 lg:p-16 shadow-[0_0_100px_rgba(0,0,0,0.8)] hidden"
    >
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-5 border-b border-white/5 pb-8">
          <div className="flex h-12 w-12 items-center justify-center bg-white/[0.03] text-accent">
            <AIcon data={data.icon} size={24} />
          </div>
          <ATitleBold
            data={data.value}
            color="text-text-main"
            fontSize="text-xl uppercase tracking-widest"
          />
        </div>

        <AText data={data.detail} fontSize="text-lg" color="text-text-secondary" className="leading-relaxed opacity-80" />

        <div className="mt-6 flex justify-end">
          <button
            className="group relative h-12 bg-white/[0.05] px-8 transition-all duration-300 hover:bg-accent"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
          >
            <span className="font-sans font-caps text-[10px] tracking-widest text-text-main group-hover:text-background transition-colors">
              Close Detail
            </span>
          </button>
        </div>
      </div>
    </dialog>
  );
}
