import Link from "../atoms/aLink"
import Btn from "../atoms/Btn"
import Text from "../atoms/aText"
import Icon from "../atoms/aIcon"

export default function Form() {
    return (
        <form className="my-10 mx-auto w-[25%] flex flex-col gap-4">
            <input
                type="text"
                placeholder="Tu nombre"
                className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b3b3b3]"
            />
            <input
                type="email"
                placeholder="Tu correo"
                className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b3b3b3]"
            />
            <textarea
                placeholder="Escribe tu mensaje..."
                rows="4"
                className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#b3b3b3]"
            />

            <div className="bg-[#181818] w-fit rounded-full px-3 py-2">
                <Btn color="white">
                    <Text text='Enviar' />
                </Btn>
            </div>

            <div className="flex gap-4">
                <Text text='¿Prefieres escribirme directo?' />
                <Link href="mailto:cordobaojhonjairo2@gmail.com">
                    <Icon name='Mail' />
                </Link>
            </div>
        </form>
    )
}
