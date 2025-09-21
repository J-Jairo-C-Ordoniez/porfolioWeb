import Hero from "@/ui/organisms/Hero"

export default function Home({ home }) {
    return (
        <section id="home">
            <Hero user={home.user} cta={home.cta} />
        </section>
    )
}