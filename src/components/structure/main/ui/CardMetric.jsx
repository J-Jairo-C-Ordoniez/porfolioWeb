import { ATitleBold } from "../atoms/Title";
import { AIcon } from "../atoms/Icon";
import { ALabel } from "../atoms/Label";

export default function MCardMetric({ data, onClick }) {
  return (
    <div
      className="group flex shrink-0 cursor-pointer flex-col items-center justify-center gap-6 border border-white/5 bg-white/[0.01] p-10 transition-all duration-500 hover:border-accent hover:bg-white/[0.03]"
      onClick={onClick}
    >
      <div className="text-accent opacity-60">
        <AIcon data={data.icon} size={24} />
      </div>

      <ATitleBold 
        data={data.value} 
        color="text-text-main" 
        fontSize="text-lg lg:text-xl" 
        className="uppercase tracking-widest font-bold"
      />

      <ALabel data={data.label} />
    </div>
  );
}
