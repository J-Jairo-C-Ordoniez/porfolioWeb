import Icon from "./Icon";
import Text from "./Text";

export default function Label({ label }) {
    return (
        <span
            className="rounded-full px-3 py-2 flex items-center text-sm gap-2 hover:scale-105 transition-scale duration-300 ease-in-out w-fit"
            style={{ background: `${label.color}20`, border: `.2vh solid ${label.color}50`, color: label.color }}
        >
            {
                label.icon
                && <Icon name={label.icon} />
            }

            <Text
                text={label.text}
                color={`${label.color}`}
                fontSize='.9rem'
            />
        </span>
    );
}