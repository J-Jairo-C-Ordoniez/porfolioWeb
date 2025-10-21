import Link from "../atoms/aLink";
import Icon from "../atoms/aIcon";
import Label from "../atoms/aLabel";
import Picture from "../atoms/aPicture";
import Text from "../atoms/aText";
import TitleSection from "../atoms/TitleSection";

export default function Blog({ blog }) {
    return (
        <Link href={blog.href}>
            <article
                className="
                flex justify-between cursor-pointer border-b-2 border-[#181818] pb-4
                transition-all duration-300 hover:shadow-lg hover:scale-[1.01]
                hover:bg-[#111111]/40 rounded-xl
            "
            >
                <div className="w-[60%] p-5 flex flex-col gap-4 relative">
                    {blog.isNew && (
                        <span className="absolute top-2 right-2 bg-[#0B84F3] text-white text-xs px-2 py-1 rounded-full">
                            Nuevo
                        </span>
                    )}

                    <Label label={blog.category} />
                    <TitleSection
                        title={blog.title}
                        color="#e0e0e0"
                        fontSize="1.4rem"
                    />

                    <Text text={blog.excerpt} />

                    <span className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[#0B84F3]">
                            <Icon name="Calendar" />
                            <Text text={blog.date} color="#0B84F3" />
                        </div>
                        <div className="flex items-center gap-2 text-[#E91E63]">
                            <Icon name="Timer" />
                            <Text text={blog.readTime} color="#E91E63" />
                        </div>
                    </span>
                </div>

                <div className="w-[30%] px-20 flex items-center justify-end">
                    <Picture src={blog.poster.src} alt={blog.poster.alt} />
                </div>
            </article>
        </Link>
    );
}