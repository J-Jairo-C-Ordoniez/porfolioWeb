import Icon from '../atoms/aIcon'
import Text from '../atoms/aText'
import Link from '../atoms/aLink'

export default function CardTestimonie({ testimonie }) {
    return (
        <article className="relative p-10 rounded-2xl border border-white/10 bg-[#181818] shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-6 -left-6 text-white/10">
                <Icon name="Quote" size={80} />
            </div>

            <div className="relative z-10 mb-6 text-center">
                <Text
                    text={`“${testimonie.text}”`}
                    className="text-gray-300 leading-relaxed text-base"
                />
            </div>

            <div className="relative z-10 flex items-center gap-4 mt-16">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ring-2 ring-white/10">
                    <Icon name="User" className="text-gray-400" size={24} />
                </div>

                <div>
                    <Text
                        text={testimonie.author}
                        color="#0B84F3"
                    />

                    <Text
                        text={testimonie.rol}
                        color="#777"
                        fontSize='.8rem'
                    />
                </div>

                <div className="ml-auto">
                    <Link
                        href={testimonie.link.href}
                        target="_blank"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                    >
                        <Icon name={testimonie.link.icon} size={18} />
                    </Link>
                </div>
            </div>
        </article>
    )
}