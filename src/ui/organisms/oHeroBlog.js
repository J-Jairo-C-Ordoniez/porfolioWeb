import APicture from "../atoms/aPicture";
import AText from "../atoms/aText";
import { ATitleBold, ATitleMain } from "../atoms/aTitle";

export default function OHeroBlog({ data }) {
  return (
    <header>
      <article className="space-y-4">
        <ATitleMain data={data.title} color="#e0e0e0" fontSize="text-3xl" />

        <AText data={data.description} fontSize="text-lg" />
      </article>
      <article className="mt-10 flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-[#090909] p-1">
          <APicture
            src={data.author.avatar}
            alt={data.author.name}
            size="100"
          />
        </div>

        <ATitleBold data={data.author.name} fontSize="1rem" color="#e0e0e0" />

        <AText data={data.author.readTime} color="#E91E63" />

        <AText data={data.author.date} color="#0B84F3" />
      </article>
    </header>
  );
}
