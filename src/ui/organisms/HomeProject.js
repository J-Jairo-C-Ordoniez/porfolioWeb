import Picture from "../atoms/Picture";
import Text from "../atoms/Text";
import TitleSpace from "../atoms/TitleSpace";

export default function HomeProject({ project }) {
    return (
        <main>
            <article className="flex flex-col gap-5 justify-center items-center p-10">
                <Picture
                    src={project.logo}
                    alt={project.title}
                    size="10"
                />

                <TitleSpace
                    title={project.title}
                    color="#e0e0e0"
                    fontSize="2rem"
                />

                <Text
                    text={project.description}
                    color="#b3b3b3"
                    fontSize="1.1rem"
                />
            </article>
        </main>
    )
}