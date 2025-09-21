import Text from "../atoms/Text"
import Icon from "../atoms/Icon"

export default function CardSkill({ skill }) {
    return (
        <article className="w-fit flex gap-4 items-center py-4 px-6 text-[#b3b3b3] bg-[#181818] rounded-2xl hover:scale-105 duration-300 ease-in">
            <Icon name={skill.icon} />
            <Text text={skill.name} color="#e0e0e0" />
            <Text text={skill.description} color="#aaa" fontSize=".9rem" />
        </article>
    )
}