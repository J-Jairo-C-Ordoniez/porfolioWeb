import { ATitleSection } from "../atoms/Title";
import MListBlog from "../molecules/LIstBlog";

export default function OListBlog({ data, idCurrent }) {
  return (
    <section className="space-y-4">
      <ATitleSection data="Más Artículos" fontSize="text-xl lg:text-2xl" color="#cbd5e1" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.items.map(
          (item) =>
            item.id !== idCurrent && <MListBlog key={item.id} data={item} />,
        )}
      </div>
    </section>
  );
}
