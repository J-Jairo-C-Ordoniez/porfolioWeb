import Btn from "../atoms/Btn"
import Icon from "../atoms/aIcon"
import Text from "../atoms/aText"
import TitleSpace from "../atoms/TitleSpace"

export default function AsideProjectPage({ data, open, handleClick, setItem }) {

    return (
        <article>
            <button
                className="flex items-center justify-between w-full"
                onClick={handleClick}
            >
                <Text
                    text={data.title}
                    color="#e0e0e0"
                />

                {
                    open === data.title
                        ? <Icon name='ChevronDown' />
                        : <Icon name='ChevronRight' />
                }
            </button>
            {
                open === data.title && (
                    <div className="flex flex-col pl-4 border-l border-[#1f1f1f]">
                        {
                            data.menu.map(m => (
                                <Btn
                                    key={m.id}
                                    onClick={() => setItem(data.content[m.id])}

                                >
                                    <TitleSpace
                                        title={m.text}
                                        color="#b3b3b3"
                                    />
                                </Btn>
                            ))
                        }
                    </div>
                )
            }
        </article>
    )
}