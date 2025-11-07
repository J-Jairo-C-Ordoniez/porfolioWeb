import AText from "../../../ui/atoms/aText";
import APicture from "../../../ui/atoms/aPicture";
import ODetail from "../../../ui/organisms/oDetail";

export default function SHero({ data }) {
  return (
    <section
      id={data.id}
      className="flex flex-col items-center justify-between gap-10 overflow-x-hidden px-6 py-20 sm:px-10 md:flex-row md:gap-6 md:px-20 lg:px-32 xl:px-40"
    >
      <ODetail data={data} />

      <article className="order-first flex w-[60%] items-center justify-center sm:w-[50%] md:order-none md:w-[30%]">
        <APicture
          src={data.user.photo.src}
          alt={data.user.photo.alt}
          size="350"
        />
      </article>

      {/* Columna derecha (descripción) */}
      <article className="flex w-full justify-center text-center md:w-[30%] md:justify-start md:text-left">
        <AText data={data.user.description} fontSize="1rem" />
      </article>
    </section>
  );
}
