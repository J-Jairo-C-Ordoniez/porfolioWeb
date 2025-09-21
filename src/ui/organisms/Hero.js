import Name from "../atoms/Name"
import TitleSpace from "../atoms/TitleSpace"
import Picture from "../atoms/Picture"
import Text from "../atoms/Text"
import CTAs from "../molecules/CTAs"

export default function Hero({ user, cta }) {
    return (
        <section className="flex justify-between rounded-b-sm px-30 pt-30 pb-20 h-[90vh]"
        >
            <article className="grid items-end w-[50%] h-[100%]">
                <div className="flex flex-col gap-5">
                    <Name
                        name={user.name}
                        lastName={user.lastName}
                    />

                    <TitleSpace
                        title={user.rol}
                    />
                </div>

                <div>
                    <CTAs ctas={cta} />
                </div>
            </article>

            <article className="w-[25%]">
                <Picture 
                    src={user.photo.src} 
                    alt={user.photo.alt} 
                    size={user.photo.size}
                />
            </article>

            <article className="w-[25%] py-[20%]">
                <Text
                    text={user.description}
                    fontSize="1.2rem"
                />
            </article>
        </section>
    )
}