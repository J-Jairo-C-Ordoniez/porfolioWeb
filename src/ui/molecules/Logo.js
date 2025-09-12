import Picture from "../atoms/Picture";
import TitleMain from "../atoms/TitleMain";

export default function Logo({ name, logo }) {
    return (
        <div>
            <Picture {...logo} />
            <TitleMain title={name} />
        </div>
    )
}