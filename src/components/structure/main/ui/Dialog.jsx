import { useEffect, useRef } from "react";
import * as Icon from "lucide-react";
import Text from "./Text";
import gsap from "gsap";

export default function MDialog({ data, open, setOpen }) {
  const dialogRef = useRef(null);
  const AIcon = Icon[data.icon];

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
      className="fixed inset-0 m-auto z-200 max-w-lg border border-white/5 bg-background p-6 lg:p-16 hidden"
    >
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-5 border-b border-white/5 pb-8">
          <div className="flex h-12 w-12 items-center justify-center bg-white/[0.03] text-accent">
            <AIcon size={24} />
          </div>
          <h2 className="text-primary/60 text-xs lg:text-sm uppercase tracking-wider font-medium">
            {data.value}
          </h2>
        </div>

        <Text text={data.detail} />

        <div className="mt-6 flex justify-end">
          <button
            className="text-primary/60 group cursor-pointer relative h-12 bg-primary/10 px-8 transition-all duration-300 hover:bg-accent"
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
