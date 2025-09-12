import Image from "next/image"

export default function Picture({ src, alt, className, size }) {
    return (
        <Image 
            src={src} 
            alt={alt} 
            className={className} 
            layout="responsive" 
            width={size} 
            height={size} />
    )
}