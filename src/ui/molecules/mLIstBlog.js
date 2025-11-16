import { ATitleBold } from "../atoms/aTitle";
import AText from "../atoms/aText";
import ALink from "../atoms/aLink";

export default function MListBlog({ data }) {
  return (
    <ALink href={data.href}>
      <article className="mt-2 transition-scale cursor-pointer space-y-2 border-b border-slate-600/20 ring-b-1 ring-slate-700/6 pb-4 pl-4 duration-300 hover:scale-106">
        <ATitleBold data={data.title} color="#e0e0e0" fontSize="text-lg" />

        <AText data={data.readTime} color="#b3b3b3" />
      </article>
    </ALink>
  );
}
