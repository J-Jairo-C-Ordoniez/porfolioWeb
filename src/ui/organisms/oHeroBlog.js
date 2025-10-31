import APicture from "../atoms/aPicture";
import AText from "../atoms/aText";
import { ATitleBold, ATitleMain, ATitleSection } from "../atoms/aTitle";

export default function OHeroBlog({ data }) {
    return (
        <header>
            <article className="space-y-4">
                <ATitleMain
                    data={data.title}
                    color="#EAECEF"
                    fontSize="3rem"
                />

                <AText
                    data={data.description}
                    fontSize="1.2rem"
                    color="#ACB4BF"
                />
            </article>
            <article className="flex items-center gap-4 mt-10">
                <div className="rounded-full p-1 w-10 h-10 bg-[#090909]">
                    <APicture
                        src={data.author.avatar}
                        alt={data.author.name}
                        size="100"
                    />
                </div>


                <ATitleBold
                    data={data.author.name}
                    fontSize="1rem"
                    color="#e0e0e0"
                />

                <AText
                    data={data.author.readTime}
                    color="#E91E63"
                />

                <AText
                    data={data.author.date}
                    color="#0B84F3"
                />
            </article>
        </header>
    );
}
