import OBlog from "@/ui/organisms/oBlog";
import { ATitleSection } from "../../../ui/atoms/aTitle";

export default function SBlog({ data }) {
  return (
    <section id={data.id} className="space-y-10 overflow-hidden px-10 py-5 sm:px-12 md:px-20 lg:flex-row lg:px-32 xl:px-35">
      <ATitleSection data={data.title} color="#e0e0e0" />

      <OBlog data={data.items} />
    </section>
  );
}
