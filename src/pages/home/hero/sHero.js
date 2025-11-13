import AText from "../../../ui/atoms/aText";
import APicture from "../../../ui/atoms/aPicture";
import ODetail from "../../../ui/organisms/oDetail";

export default function SHero({ data }) {
  return (
    <section
      id={data.id}
      className="flex flex-col items-center justify-between gap-10 overflow-x-hidden px-10 py-20 sm:px-12 sm:flex-col sm:py-30 md:px-20 md:flex-col lg:px-32 lg:py-75 lg:flex-row xl:px-35 xl:flex-row"
    >
      <ODetail data={data} />

      <article className="rounded-full order-first flex w-50 h-50 mb-10 bg-[#00C896] items-center justify-center sm:w-60 sm:h-60 lg:order-none lg:w-[30%] lg:bg-[#00000000]">
        <APicture
          src={data.user.photo.src}
          alt={data.user.photo.alt}
          size="350"
        />
      </article>

      <article className="flex w-full justify-center text-center lg:w-[30%] lg:justify-start lg:text-left">
        <AText 
          data={data.user.description} 
          fontSize="text-md lg:text-lg" 
        />
      </article>
    </section>
  );
}
