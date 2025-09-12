import Image from "next/image"
import Link from "next/link"

export default function PictureLogo({ src, alt, size }) {
    return (
        <Link
            href="/"
            className="hover:scale-120 transition-scale duration-300 ease-in-out"
        >
            <Image
                src={src}
                alt={alt}
                layout="responsive"
                width={size}
                height={size} />
        </Link>
    )
}