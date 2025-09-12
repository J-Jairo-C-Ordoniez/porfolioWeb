import Header from "../../ui/organisms/Header"

export default function Home({ logo, links }) {
    return (
        <div>
            <Header logo={logo} links={links} />
        </div>
    )
}