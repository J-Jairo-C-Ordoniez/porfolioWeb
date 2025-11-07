import { ATitleBold } from "../atoms/aTitle";
import AIcon from "../atoms/aIcon";
import AText from "../atoms/aText";
import ALink from "../atoms/aLink";
import ARed from "../atoms/aRed";

export default function MCardTestimonie({ data }) {
  return (
    <>
      <figure className="absolute -top-6 -left-6 text-[#b3b3b3]">
        <AIcon data="Quote" />
      </figure>

      <div className="relative z-10 mb-6 text-center">
        <AText data={`“${data.text}”`} fontSize="1.1rem" textAlign="center" />
      </div>

      <div className="relative z-10 mt-16 flex items-center gap-4">
        <figure className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/10">
          <AIcon data="User" />
        </figure>

        <span>
          <ATitleBold data={data.author} color="#00C896" />

          <AText data={data.rol} fontSize=".9rem" />
        </span>

        <div className="ml-auto">
          <ARed href={data.link.href} target="_blank">
            <AIcon data={data.link.icon} />
          </ARed>
        </div>
      </div>
    </>
  );
}
