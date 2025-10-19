import Image from "next/image"

export default function Picture({ src, alt, size = '100' }) {
    return (
        <div
            className="hover:scale-105 transition-scale duration-300 ease-in-out"
            style={{ width: `${size}%` }}
        >
            <Image
                src={src}
                alt={alt}
                layout="responsive"
                width={size}
                height={size}
                style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    borderRadius: "0.75rem"
                }}
            />
        </div>
    )
}