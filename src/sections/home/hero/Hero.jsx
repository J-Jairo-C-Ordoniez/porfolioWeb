import AText from "../../../components/atoms/Text";
import APicture from "../../../components/atoms/Picture";
import ODetail from "../../../components/organisms/Detail";

export default function SHero({ data }) {
  return (
    <section
      id={data.id}
      className="flex flex-col items-center justify-between gap-10 overflow-x-hidden px-5 py-10 sm:px-8 sm:flex-col sm:py-30 md:px-12 md:flex-col lg:px-20 lg:py-30 lg:flex-row xl:px-35 xl:flex-row"
    >
      <ODetail data={data} />

      <article className="rounded-full order-first flex w-50 h-50 mb-10 bg-[#00C896] items-center justify-center sm:w-60 sm:h-60 lg:order-none lg:w-150 lg:h-150 lg:bg-[#00000000]">
        <APicture
          src={data.user.photo.src}
          alt={data.user.photo.alt}
          size="100"
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
