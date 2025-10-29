import { ATitleBold } from "../atoms/aTitle";
import APicture from "../atoms/aPicture";
import ARed from "../atoms/aRed";
import AIcon from "../atoms/aIcon";
import MMenu from "../molecules/mMenu";
import AText from "../atoms/aText";



export default function OFooter({ data }) {
    return (
        <footer className="w-full bg-[#181818] py-10">
            <article className="max-w-5xl mx-auto flex flex-col items-center gap-6 px-4">
                <div className="flex flex-col items-center gap-4">
                    <APicture
                        src={data.logo.src}
                        alt={data.logo.alt}
                        size="20"
                    />
                    <ATitleBold
                        data={data.title}
                        fontSize="1.4rem"
                        color="#e0e0e0"
                    />
                </div>

                <MMenu data={data.menu} />

                <div className="flex gap-4">
                    {data.social.map(red => (
                        <ARed
                            key={red.id}
                            href={red.href}
                        >
                            <AIcon data={red.icon} />
                        </ARed>
                    ))}
                </div>

                <div className="text-xs text-gray-500 mt-4 flex flex-col items-center gap-2">
                    <AText data={data.copyright} />
                </div>
            </article>
        </footer>
    );
}
