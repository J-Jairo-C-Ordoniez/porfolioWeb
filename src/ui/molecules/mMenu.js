import ALink from "../atoms/aLink";
import Text from "../atoms/aText";

export default function MMenu({ data }) {
    return (
        <nav>
            <ul className="flex gap-4 items-center">
                {data.map(link => (
                    <li key={link.id}>
                        <ALink href={link.href}>
                            <Text 
                                data={link.text} 
                                fontSize=".9rem"
                            />
                        </ALink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}