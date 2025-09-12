import Menu from "../molecules/Menu";
import Logo from "../molecules/Logo";

export default function Header({logo, links}) {
    return (
        <header>
            <Logo {...logo} />
            <Menu links={links} />
        </header>
    )
}