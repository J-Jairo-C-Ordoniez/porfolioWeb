import Link from "../atoms/Link";

export default function Menu({ links }) {
    const li = links.map(link => (
        <li key={link.id}>
            <Link href={link.href}>
                {link.text}
            </Link>
        </li>
    ));

    return (
        <nav>
            <ul>
                {li}
            </ul>
        </nav>
    )
}