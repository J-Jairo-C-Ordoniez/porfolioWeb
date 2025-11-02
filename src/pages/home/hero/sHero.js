import AText from '../../../ui/atoms/aText'
import APicture from '../../../ui/atoms/aPicture'
import ODetail from '@/ui/organisms/oDetail'

export default function SHero({ data }) {
    return (
        <section
            id={data.id}
            className="flex justify-between px-30 py-25 h-[90vh] overflow-x-hidden"
        >
            <ODetail data={data} />

            <article className="w-[25%] flex justify-center items-center">
                <APicture
                    src={data.user.photo.src}
                    alt={data.user.photo.alt}
                    size='400'
                />
            </article>

            <article className="w-[25%] py-[20%]">
                <AText
                    data={data.user.description}
                    fontSize="1.2rem"
                />
            </article>
        </section>
    )
}