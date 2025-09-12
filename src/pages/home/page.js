import Hero from "@/ui/organisms/Hero"
import Header from "../../ui/organisms/Header"

export default function Home({ home }) {
    return (
        <div>
            <Header logo={home.logo} links={home.links} />
            <Hero user={home.user} cta={home.cta} />
        </div>
    )
}