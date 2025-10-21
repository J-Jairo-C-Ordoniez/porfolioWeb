import { ATitleBold } from "../atoms/aTitle";
import AText from "../atoms/aText";
import AIcon from "../atoms/aIcon";
import APicture from "../atoms/aPicture";
import ALabel from "../atoms/aLabel";
import ARed from "../atoms/aRed";

export default function MCardProject({ data }) {
    return (
        <>
            {data.direction === 'left' &&
                <figure className="w-[50%]">
                    <APicture
                        src={data.poster}
                        alt={data.title}
                        size={100}
                    />
                </figure>
            }

            <article className="w-[50%] flex flex-col gap-4 justify-center">
                <ATitleBold
                    data={data.title}
                    fontSize="2rem"
                    color='#b5b5b5'
                />

                <div className="flex gap-2 mb-4 flex-wrap">
                    {data.labels.map(label => (
                        <ALabel
                            key={label.id}
                            data={label}
                        />
                    ))}
                </div>

                <AText
                    data={data.description}
                    color='#b3b3b3'
                    fontSize='1rem'
                />

                <div className="flex gap-3 flex-wrap ">
                    {data.links.map(link => (
                        <div key={link.id} className="flex gap-3">
                            <ARed href={link.href}>
                                <AIcon data={link.icon} />
                            </ARed>
                        </div >
                    ))}
                </div>
            </article>

            {data.direction === 'right' &&
                <figure className="w-[50%]">
                    <APicture
                        src={data.poster}
                        alt={data.title}
                        size={100}
                    />
                </figure>
            }
        </>
    );
}
