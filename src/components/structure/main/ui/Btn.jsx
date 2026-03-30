import Link from "next/link";
import { AIcon } from "./Icon";
import { useMagneticButton } from "../../../../hooks/useMagneticButton";

export function ABtn({ data, onClick, dataId = "", className = "" }) {
  return (
    <button
      className={`flex cursor-pointer items-center gap-3 rounded-none border border-transparent px-4 py-2 text-[10px] font-caps transition-all duration-300 hover:border-accent hover:text-accent active:scale-95 text-text-secondary ${className}`}
      data-id={dataId}
      onClick={onClick}
    >
      <AIcon data={data.icon} />
      <span className="hidden sm:block">
        {data.text}
      </span>
    </button>
  );
}

export function ABtnLinear({ data }) {
  const buttonRef = useMagneticButton(0.2);

  return (
    <Link
      ref={buttonRef}
      href={data.href}
      className="flex items-center gap-4 rounded-none border border-white/10 bg-transparent px-8 py-4 transition-all duration-500 hover:border-accent hover:bg-white/[0.02] active:scale-95"
    >
      <span className="font-sans font-caps text-xs tracking-widest text-white">
        {data.text}
      </span>
      <div className="flex h-6 w-6 items-center justify-center text-accent/60">
        <AIcon data={data.icon} />
      </div>
    </Link>
  );
}

export function ABtnBold({ data }) {
  const buttonRef = useMagneticButton(0.2);

  return (
    <Link
      ref={buttonRef}
      href={data.href}
      className="group relative flex items-center justify-center overflow-hidden rounded-none bg-accent px-10 py-5 transition-all duration-500 hover:bg-accent-secondary active:scale-95 shadow-none"
    >
      <span className="relative z-10 font-sans font-caps text-xs font-bold tracking-widest text-bg-dark">
        {data.text}
      </span>
      <div className="absolute inset-x-0 bottom-0 h-0 w-full bg-white/10 transition-all duration-300 group-hover:h-full" />
    </Link>
  );
}

export function ABtnCTA({ data, onClick, dataId = "", className = "" }) {
  return (
    <button
      className={`group flex items-center gap-4 cursor-pointer rounded-none border-b border-white/20 pb-2 transition-all duration-300 hover:border-accent hover:gap-6 ${className}`}
      data-id={dataId}
      onClick={onClick}
    >
      <span className="font-sans font-caps text-sm font-bold tracking-widest text-text-main group-hover:text-accent">
        {data.text}
      </span>
      <AIcon data={data.icon} className="text-accent transition-transform group-hover:translate-x-1" />
    </button>
  );
}
