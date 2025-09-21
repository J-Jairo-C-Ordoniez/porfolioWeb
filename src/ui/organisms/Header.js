import Menu from "../molecules/Menu";
import Logo from "../molecules/Logo";

export default function Header({logo, links}) {
    return (
        <header className="flex justify-between items-center py-4 px-30 rounded-t-sm">
            <Logo {...logo} />
            <Menu links={links} />
        </header>
    )
}