import { ATitleBold } from "../atoms/aTitle"
import AIcon from "../atoms/aIcon"
import ALabel from "../atoms/aLabel"

export default function MCardMetric({ data, onClick }) {
    return (
        <div
            className="flex flex-col justify-center items-center gap-4 shrink-0 cursor-pointer group p-6 rounded-2xl bg-slate-600/20 border border-slate-700 hover:border-slate-500 transition-transform hover:scale-106 transition-scale"
            onClick={onClick}
        >
            <AIcon data={data.icon} />

            <ATitleBold
                data={data.value}
                color='#e0e0e0'
                fontSize='1rem'
            />

            <ALabel data={data.label} />
        </div>
    )
}