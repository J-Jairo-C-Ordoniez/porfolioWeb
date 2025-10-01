import Menu from "../molecules/Menu";
import Logo from "../molecules/Logo";

export default function Header({ logo, links = [] }) {
    return (
        <header className="col-span-3 flex justify-between items-center py-8 px-30 rounded-t-sm">
            <Logo {...logo} />
            {
                links.length >= 0
                && <Menu links={links} />
            }
        </header>
    )
}