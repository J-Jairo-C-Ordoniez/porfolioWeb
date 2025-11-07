import { ABtnBold, ABtnLinear } from "../atoms/aBtn";
import { ATitleName, ATitleBold } from "../atoms/aTitle";

export default function ODetail({ data }) {
  return (
    <article className="grid h-[100%] w-[50%] items-end">
      <div className="flex flex-col gap-5">
        <ATitleName name={data.user.name} lastName={data.user.lastName} />

        <ATitleBold data={data.user.rol} />
      </div>

      <div className="flex items-center gap-6">
        {data.cta.map((cta) =>
          cta.type === "linear" ? (
            <ABtnLinear key={cta.id} data={cta} />
          ) : (
            <ABtnBold key={cta.id} data={cta} />
          ),
        )}
      </div>
    </article>
  );
}
