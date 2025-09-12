import PictureLogo from "../atoms/PictureLogo";
import TitleMain from "../atoms/TitleMain";

export default function Logo({ name, logo }) {
    return (
        <div className="flex items-center gap-4">
            <PictureLogo {...logo} />
            <TitleMain title={name} />
        </div>
    )
}