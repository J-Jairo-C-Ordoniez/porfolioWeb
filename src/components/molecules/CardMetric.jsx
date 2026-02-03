import { ATitleBold } from "../atoms/Title";
import AIcon from "../atoms/Icon";
import ALabel from "../atoms/Label";

export default function MCardMetric({ data, onClick }) {
  return (
    <div
      className="group transition-scale flex shrink-0 cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-slate-700 bg-slate-600/20 p-6 transition-transform hover:scale-106 hover:border-slate-500"
      onClick={onClick}
    >
      <AIcon data={data.icon} />

      <ATitleBold data={data.value} color="#e0e0e0" fontSize="1rem" />

      <ALabel data={data.label} />
    </div>
  );
}
