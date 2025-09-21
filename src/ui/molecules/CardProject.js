import Picture from "../atoms/Picture";
import TitleSection from "../atoms/TitleSection";
import Label from "../atoms/Label";
import Text from "../atoms/Text";
import Red from "../atoms/Red";
import Icon from "../atoms/Icon";

export default function CardProject({ project }) {
    const labels = project.labels.map(label => (
        <Label
            key={label.id}
            label={label}
        />
    ))

    const redes = project.links.map(link => (
        <div key={link.id} className="flex gap-3">
            <Red
                href={link.href}
            >
                <Icon name={link.icon} />
            </Red>
        </div >
    ))

    return (
        <section className="flex gap-10 bg-[#181818] rounded-4xl border border-slate-600/20 ring-1 ring-slate-700/6 p-10">
            {
                project.direction === 'left'
                &&
                <article className="w-[50%]">
                    <Picture
                        src={project.poster}
                        alt={project.title}
                        size={100}
                    />
                </article>
            }

            <article className="w-[50%] flex flex-col gap-4 justify-center">
                <TitleSection
                    title={project.title}
                    color='#b3b3b3'
                />

                <div className="flex gap-2 mb-4 flex-wrap">
                    {labels}
                </div>

                <Text
                    text={project.description}
                    color='#b3b3b3'
                    fontSize='1rem'
                />

                <div className="flex gap-3 flex-wrap ">
                    {redes}
                </div>
            </article>

            {
                project.direction === 'right'
                &&
                <article className="w-[50%]">
                    <Picture
                        src={project.poster}
                        alt={project.title}
                        size={100}
                    />
                </article>
            }
        </section>
    );
}
