import AText from '../../../ui/atoms/aText'
import APicture from '../../../ui/atoms/aPicture'
import ODetail from '../../../ui/organisms/oDetail'

export default function SHero({ data }) {
    return (
        <section
            id={data.id}
            className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 overflow-x-hidden py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40"
        >
            <ODetail data={data} />

            <article className="w-[60%] sm:w-[50%] md:w-[30%] flex justify-center items-center order-first md:order-none">
                <APicture
                    src={data.user.photo.src}
                    alt={data.user.photo.alt}
                    size="350"
                />
            </article>

            {/* Columna derecha (descripción) */}
            <article className="w-full md:w-[30%] flex justify-center md:justify-start text-center md:text-left">
                <AText
                    data={data.user.description}
                    fontSize="1rem"
                />
            </article>
        </section>
    )
}
