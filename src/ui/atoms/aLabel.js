import AIcon from "./aIcon";
import AText from "./aText";

export default function ALabel({ data }) {
    return (
        <span
            className="rounded-full px-3 py-2 flex items-center text-sm gap-2 hover:scale-105 transition-scale duration-300 ease-in-out w-fit"
            style={{ background: `${data.color}20`, border: `.2vh solid ${data.color}50`, color: data.color }}
        >
            {data.icon && <AIcon data={data.icon} />}

            <AText
                data={data.text}
                color={`${data.color}`}
                fontSize='.9rem'
            />
        </span>
    );
}