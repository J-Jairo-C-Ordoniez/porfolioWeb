import Start from "../pages/home/Page";

const logo = {
  name: "J Jairo C Ordoñez",
  logo: {
    src: "/logo.svg",
    alt: "Logo de mi portafolio",
    className: "rounded-full",
    size: 100,
  }
}

const links = [
  { id: 1, href: "#about", text: "About" },
  { id: 2, href: "#projects", text: "Projects" },
  { id: 3, href: "#contact", text: "Contact" },
]

export default function Home() {
  return (
    <Start logo={logo} links={links} />
  );
}
