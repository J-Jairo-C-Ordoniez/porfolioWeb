import { ABtnBold, ABtnLinear } from "../atoms/aBtn";
import { ATitleName, ATitleBold } from "../atoms/aTitle";

export default function ODetail({ data }) {
  return (
    <article className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[60%] xl:w-[50%]">
      <div className="flex flex-col gap-2">
        <ATitleName 
          name={data.user.name} 
          lastName={data.user.lastName} 
        />

        <ATitleBold 
          data={data.user.rol} 
          fontSize="text-1xl"
        />
      </div>

      <div className="flex items-center gap-6 mt-10">
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
