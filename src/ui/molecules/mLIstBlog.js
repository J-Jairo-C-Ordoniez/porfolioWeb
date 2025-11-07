import { ATitleBold } from "../atoms/aTitle";
import ALabel from "../atoms/aLabel";
import AText from "../atoms/aText";
import AIcon from "../atoms/aIcon";
import APicture from "../atoms/aPicture";
import ALink from "../atoms/aLink";

export default function MListBlog({ data }) {
  return (
    <ALink href={data.href}>
      <article className="transition-scale cursor-pointer space-y-2 border-b border-[#22222281] pb-4 pl-4 duration-300 hover:scale-106">
        <ATitleBold data={data.title} color="#e0e0e0" fontSize="1rem" />

        <AText data={data.readTime} color="#b3b3b3" />
      </article>
    </ALink>
  );
}
