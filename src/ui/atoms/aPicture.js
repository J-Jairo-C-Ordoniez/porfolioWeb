import Image from "next/image"

export default function APicture({ src, alt, size = '100' }) {
    return (
        <div
            className="hover:scale-102 transition-scale duration-300 ease-in-out"
            style={{ width: `${size}%` }}
        >
            <Image
                title={alt}
                src={src}
                alt={alt}
                width={size}
                height={size}
                priority
                style={{
                    objectFit: "contain",
                    objectPosition: "center"
                }}
            />
        </div>
    )
}