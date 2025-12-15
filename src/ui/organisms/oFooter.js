import { ATitleBold } from "../atoms/aTitle";
import ARed from "../atoms/aRed";
import AIcon from "../atoms/aIcon";
import MMenu from "../molecules/mMenu";
import AText from "../atoms/aText";

export default function OFooter({ data }) {
  return (
    <footer className="w-full bg-[#1A2534] py-10">
      <article className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <ATitleBold data={data.title} fontSize="text-xl" color="#e0e0e0" />
        </div>

        <MMenu data={data.menu} />

        <div className="flex gap-4">
          {data.social.map((red) => (
            <ARed key={red.id} href={red.href}>
              <AIcon data={red.icon} />
            </ARed>
          ))}
        </div>

        <div className="mt-4 flex flex-col items-center gap-2 text-xs text-gray-500">
          <AText data={data.copyright} fontSize="text-lg" />
        </div>
      </article>
    </footer>
  );
}
