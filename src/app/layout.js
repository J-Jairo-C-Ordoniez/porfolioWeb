import { Poppins, Inter } from "next/font/google";
import "../styles/globals.css";
import MotionLayout from "../ui/organisms/MotionLayaut";

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
  title: "J Jairo C Ordoñez",
  description: "Construyo experiencias web minimalistas, claras y profesionales, con un enfoque creativo que une funcionalidad, diseño y tecnología para dar vida a tus ideas.",
  openGraph: {
    title: "J Jairo C Ordoñez",
    description: "Construyo experiencias web minimalistas, claras y profesionales, con un enfoque creativo que une funcionalidad, diseño y tecnología para dar vida a tus ideas.",
    url: "https://jj.com/",
    siteName: "J Jairo C Ordoñez",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Avatar de J Jairo C Ordoñez",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  icons: {
    icon: "/Logo.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-[#121212] text-white scroll-smooth p-0 m-0 h-[100vh]">
        <MotionLayout>
          {children}
        </MotionLayout>
      </body>
    </html>
  );
}
