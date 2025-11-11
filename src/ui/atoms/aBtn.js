import Link from "next/link";
import AText from "./aText";
import AIcon from "./aIcon";

export function ABtn({ data, onClick, dataId = "", color = "#b3b3b3" }) {
  return (
    <button
      className="flex cursor-pointer items-center gap-3 rounded-full px-3 py-2 text-[.9rem] font-light transition-transform duration-300 hover:scale-105"
      style={{ color }}
      data-id={dataId}
      onClick={onClick}
    >
      <AIcon data={data.icon} />
      <span className="hidden sm:block">
        <AText data={data.text} color={color} fontSize="text-sm md:text-base" />
      </span>
    </button>
  );
}

export function ABtnLinear({ data }) {
  return (
    <Link
      href={data.href}
      className="flex items-center gap-5 rounded-full border-4 border-[#262626] font-bold text-[#e0e0e0] transition-transform duration-300 hover:scale-105 px-6 py-3"
    >
      <AText
        data={data.text}
        color="#b3b3b3"
        fontSize="text-1xl"
      />

      <div className="rounded-full bg-[#262626] p-2 text-[#b3b3b3]">
        <AIcon data={data.icon} />
      </div>
    </Link>
  );
}

export function ABtnBold({ data }) {
  return (
    <Link
      href={data.href}
      className="flex items-center gap-5 rounded-full border-4 border-[#262626] bg-[#262626] px-10 py-5 font-bold text-[#b3b3b3] transition-transform duration-300 hover:scale-105"
    >
      <AText
        data={data.text}
        color="#b3b3b3"
        fontSize="text-1xl"
      />

      <AIcon data={data.icon} />
    </Link>
  );
}

export function ABtnCTA({ data, onClick, dataId = "", color = "#b3b3b3" }) {
  return (
    <button
      className="cursor-pointer rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 px-10 py-5 font-bold shadow-lg shadow-fuchsia-500/20 transition-all duration-300 hover:scale-106 hover:shadow-fuchsia-400/30"
      style={{ color }}
      data-id={dataId}
      onClick={onClick}
    >
      <AText data={data.text} color="#b3b3b3" fontSize="1rem" />
    </button>
  );
}

export default function ABtnDoc({
  children,
  onClick,
  color = "#b3b3b3",
  background = "#121212",
}) {
  return (
    <button
      className="w-full cursor-pointer rounded-r-full px-10 py-3 transition-all duration-300 hover:bg-[#00C89605]"
      style={{ background, color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
