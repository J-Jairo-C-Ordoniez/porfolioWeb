import Image from "next/image";

export default function APicture({ src, alt, size = "100" }) {
  return (
    <div
      className="relative transition-scale duration-300 ease-in-out hover:scale-102 flex justify-center items-center"
      style={{ width: `${size}%`, height: `${size}%` }}
    >
      <Image
        src={src}
        alt={alt}
        title={alt}
        fill
        priority
        style={{
          objectFit: "contain",
          objectPosition: "center",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}