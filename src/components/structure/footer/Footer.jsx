import { ATitleBold } from "../main/ui/Title";
import { ARed } from "../main/ui/Red";
import { AIcon } from "../main/ui/Icon";
import MMenu from "../main/ui/Menu";
import { AText } from "../main/ui/Text";

export default function OFooter({ data }) {
  if (!data) return null;

  return (
    <footer className="w-full border-t border-white/5 bg-background py-24">
      <article className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <ATitleBold 
            data={data.title} 
            fontSize="text-xl md:text-2xl" 
            className="uppercase tracking-[0.3em] font-light opacity-80" 
          />
          <div className="h-px w-12 bg-accent opacity-40 mx-auto" />
        </div>

        <div className="w-full max-w-2xl px-6">
          <MMenu data={data.menu} />
        </div>

        <div className="flex gap-10">
          {data.social?.map((red) => (
            <ARed key={red.id} href={red.href} className="!p-2 border-none bg-transparent hover:text-accent opacity-60 hover:opacity-100 transition-all">
              <AIcon data={red.icon} size={20} />
            </ARed>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/5 pt-12 w-full max-w-xs">
          <AText 
            data={data.copyright} 
            fontSize="text-[10px]" 
            color="text-text-secondary" 
            className="font-caps tracking-widest opacity-40"
          />
        </div>
      </article>
    </footer>
  );
}
