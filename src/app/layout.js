import { Poppins, Inter } from "next/font/google";
import OMotionLayout from "../ui/organisms/oMotionLayaut";
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

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-[#121212] text-white scroll-smooth p-0 m-0 h-[100vh]">
        <OMotionLayout>
          {children}
        </OMotionLayout>
      </body>
    </html>
  );
}
