import { ATitleBold } from "../atoms/aTitle";
import AText from "../atoms/aText";
import AIcon from "../atoms/aIcon";
import APicture from "../atoms/aPicture";
import ALabel from "../atoms/aLabel";
import ARed from "../atoms/aRed";

export default function MCardProject({ data }) {
  return (
    <>
      {data.direction === "left" && (
        <figure className="flex w-[50%] items-center justify-center">
          <APicture src={data.poster} alt={data.title} size="500" />
        </figure>
      )}

      <article className="flex w-[50%] flex-col justify-center gap-4">
        <ATitleBold data={data.title} fontSize="2rem" color="#b5b5b5" />

        <div className="mb-4 flex flex-wrap gap-2">
          {data.labels.map((label) => (
            <ALabel key={label.id} data={label} />
          ))}
        </div>

        <AText data={data.description} color="#b3b3b3" fontSize="1.1rem" />

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
        <figure className="w-[50%]">
          <APicture src={data.poster} alt={data.title} size="500" />
        </figure>
      )}
    </>
  );
}
