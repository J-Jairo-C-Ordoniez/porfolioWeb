import TitleSection from "../atoms/TitleSection"
import Icon from "../atoms/Icon"
import Label from "../atoms/Label"

export default function CardMetric({ metric, handleClick }) {
    return (
        <div
            onClick={handleClick}
            className="flex flex-col gap-4 justify-center items-center cursor-pointer group p-6 rounded-2xl bg-slate-600/20 border border-slate-700 hover:border-slate-500 transition-transform hover:scale-105 shadow-lg"
        >
            <Icon name={metric.icon} />

            <TitleSection
                title={metric.value}
                color='#e0e0e0'
                fontSize='1rem'
            />

            <Label label={metric.label} />
        </div>
    )
}