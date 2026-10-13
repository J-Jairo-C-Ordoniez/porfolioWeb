import KodaNavWrapper from "@/features/koda/components/KodaNavWrapper";
import Footer from "@/shared/components/footer/Footer";

export default function KodaLayout({ children }) {
  return (
    <>
      <KodaNavWrapper />
      {children}
      <Footer />
    </>
  );
}
