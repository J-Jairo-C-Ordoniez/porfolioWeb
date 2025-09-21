import Picture from "../atoms/Picture"
import TitleSpace from "../atoms/TitleSpace"
import Text from "../atoms/Text"

export default function WithoutProjects() {
    return (
        <section className="flex flex-col items-center justify-center my-20 p-6 text-center w-[50%] gap-2 m-auto">
            <Picture
                src="/404.png"
                alt="Sin proyectos"
                size={30}
            />

            <TitleSpace
                title="¡Ups! No hay proyectos aquí"
                color="#e0e0e0"
                fontSize="1rem"
            />

            <Text
                text="Estamos trabajando en nuevas ideas y pronto verás aquí proyectos increíbles. Mantente atento."
                color="#666"
            />

            <div className="flex items-center justify-center px-6 py-3 rounded-2xl border border-blue-500/30 bg-blue-500/50 shadow-md">
                <Text
                    text="404"
                    color="#b3b3b3"
                />
            </div>
        </section>
    )
}