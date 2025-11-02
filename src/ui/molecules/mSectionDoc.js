import { ATitleBold } from "../atoms/aTitle";
import ALabel from "../atoms/aLabel";
import AText from "../atoms/aText";
import ACode from "../atoms/aCode";
import APicture from "../atoms/aPicture";

export default function MSectionDoc({ data }) {
    return (
        <article className="bg-[#101010] p-6 rounded-2xl shadow-md border border-[#1b1b1b]">
            <ATitleBold
                data={data.title}
                fontSize="1.4rem"
            />

            <div className="mt-4 flex flex-wrap gap-2">
                {data.labels.map(label => (
                    <ALabel
                        key={label.id}
                        data={label}
                    />
                ))}
            </div>

            <span className="flex flex-col gap-4 mt-6">
                <AText data={data.text} />
                <AText data={data.description} />
            </span>

            <div className="my-6 flex justify-center items-center">
                {data.src.type === 'code'
                    ? <ACode
                        code={data.src.content}
                        language={data.src.language}
                    />
                    : <APicture
                        src={data.src.content}
                        alt={data.src.alt}
                        size="400"
                    />
                }
            </div>

        </article>
    )
}