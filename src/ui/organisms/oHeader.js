import { ATitleMain } from "../atoms/aTitle";
import MLogo from "../molecules/mLogo";
import MMenu from "../molecules/mMenu";

export default function OHeader({ data }) {
    return (
        <header className="flex h-[8vh] justify-between items-center py-8 px-30">
            <div className="flex items-center gap-4">
                <MLogo data={data.logo} />
                <ATitleMain
                    data={data.name}
                    fontSize="1rem"
                />
            </div>

            {data.menu && <MMenu data={data.menu} />}
        </header>
    )
}