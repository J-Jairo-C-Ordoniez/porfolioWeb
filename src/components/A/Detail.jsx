import { ABtnBold, ABtnLinear } from "../ui/Btn";
import { ATitleName, ATitleBold } from "../ui/Title";

export default function ODetail({ data }) {
  return (
    <article className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-4">
        <ATitleName
          name={data.user.name}
          lastName={data.user.lastName}
          className="tracking-tight"
        />

        <ATitleBold
          data={data.user.rol}
          fontSize="text-xl lg:text-2xl"
          className="text-accent/90"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {data.cta.map((cta) =>
          cta.type === "linear" ? (
            <ABtnLinear key={cta.id} data={cta} />
          ) : (
            <ABtnBold key={cta.id} data={cta} />
          )
        )}
      </div>
    </article>
  );
}
