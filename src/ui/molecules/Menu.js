import Icon from "../atoms/Icon";
import Link from "../atoms/Link";
import Text from "../atoms/Text";

export default function Menu({ links }) {
    const li = links.map(link => (
        <li key={link.id}>
            <Link href={link.href}>
                {
                    link.icon
                        ? <Icon name={link.icon} />
                        : link.text
                }
            </Link>
        </li>
    ));

    return (
        <nav>
            <ul className="flex gap-4 items-center">
                {li}
            </ul>
        </nav>
    )
}