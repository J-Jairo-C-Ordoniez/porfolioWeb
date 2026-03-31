import { ATitleSection } from "../atoms/Title";
import MListBlog from "../molecules/LIstBlog";

export default function OListBlog({ data, idCurrent }) {
  if (!data?.items) return null;

  return (
    <section className="flex flex-col gap-12 pt-32">
      <div className="flex flex-col gap-4 border-l-2 border-accent pl-6">
        <ATitleSection 
          data="More Content" 
          fontSize="text-sm uppercase tracking-[0.4em]" 
          color="text-accent" 
        />
        <span className="font-sans text-[10px] tracking-widest text-text-secondary opacity-40 lowercase">Read related articles</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {data.items.map(
          (item) =>
            item.id !== idCurrent && <MListBlog key={item.id} data={item} />,
        )}
      </div>
    </section>
  );
}
