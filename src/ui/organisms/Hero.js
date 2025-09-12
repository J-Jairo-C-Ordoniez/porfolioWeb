import Name from "../atoms/Name"
import TitleSpace from "../atoms/TitleSpace"
import Picture from "../atoms/Picture"
import Text from "../atoms/Text"
import CTAs from "../molecules/CTAs"

export default function Hero({ user, cta }) {
    return (
        <section 
            id="home" 
            className="flex justify-between bg-[#A4A296] rounded-b-sm px-30 pt-30 pb-20 h-[90vh]"
        >
            <article className="grid items-end w-[40%] h-[100%]">
                <div className="flex flex-col gap-5">
                    <Name 
                        name={user.name} 
                        lastName={user.lastName} 
                    />

                    <TitleSpace 
                        title={user.rol} 
                        color="#4B473C" 
                    />
                </div>

                <div>
                    <CTAs ctas={cta} />
                </div>
            </article>

            <article className="w-[30%]">
                <Picture {...user.photo} />
            </article>

            <article className="w-[30%] py-[20%] px-10">
                <Text 
                    text={user.description} 
                    color="#343025" 
                />
            </article>
        </section>
    )
}