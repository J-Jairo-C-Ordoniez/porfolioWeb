import { ATitleBold } from "../atoms/Title";
import AText from "../atoms/Text";
import AIcon from "../atoms/Icon";
import APicture from "../atoms/Picture";
import ALabel from "../atoms/Label";
import ARed from "../atoms/Red";

export default function MCardProject({ data }) {
  return (
    <>
      {data.direction === "left" && (
        <figure className="flex w-[100%] h-50 lg:h-60 lg:w-[50%]">
          <APicture
            src={data.poster}
            alt={data.title}
            size="100"
          />
        </figure>
      )}

      <article className="flex w-[100%] flex-col justify-center gap-2">
        <ATitleBold
          data={data.title}
          color="#e0e0e0"
          fontSize="text-2xl lg:text-3xl"
        />

        <div className="mb-4 flex flex-wrap gap-2">
          {data.labels.map((label) => (
            <ALabel
              key={label.id}
              data={label}
            />
          ))}
        </div>

        <AText
          data={data.description}
          color="#b3b3b3"
          fontSize="text-md lg:text-lg"
        />

        <div className="flex flex-wrap gap-3">
          {data.links.map((link) => (
            <div key={link.id} className="flex gap-3">
              <ARed href={link.href}>
                <AIcon data={link.icon} />
              </ARed>
            </div>
          ))}
        </div>
      </article>

      {data.direction === "right" && (
        <figure className="flex w-[100%] h-50 order-first lg:order-none lg:h-60 lg:w-[50%]">
          <APicture src={data.poster} alt={data.title} size="100" />
        </figure>
      )}
    </>
  );
}
