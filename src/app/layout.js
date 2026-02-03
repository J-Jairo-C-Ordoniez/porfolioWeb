import { Poppins, Inter } from "next/font/google";
import OMotionLayout from "../components/organisms/MotionLayout";
import "../styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://tu-dominio.com"),
  title: {
    default: "J Jairo C Ordoñez",
    template: "%s | J Jairo C Ordoñez",
  },
  description: "Construyo experiencias web minimalistas, claras y profesionales, con un enfoque creativo que une funcionalidad, diseño y tecnología para dar vida a tus ideas.",
  openGraph: {
    title: "J Jairo C Ordoñez",
    description: "Construyo experiencias web minimalistas, claras y profesionales, con un enfoque creativo que une funcionalidad, diseño y tecnología para dar vida a tus ideas.",
    url: "https://tu-dominio.com",
    siteName: "J Jairo C Ordoñez",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Avatar de J Jairo C Ordoñez",
      },
    ],
    locale: "es_COL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="m-0 h-[100vh] bg-[#101828] p-0 text-white">
        <OMotionLayout>{children}</OMotionLayout>
      </body>
    </html>
  );
}
