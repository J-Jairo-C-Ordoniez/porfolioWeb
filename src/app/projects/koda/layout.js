import KodaMenu from "@/features/koda/components/KodaMenu";
import Footer from "@/shared/components/footer/Footer";

export default function KodaLayout({ children }) {
  return (
    <>
      <KodaMenu />
      {children}
      <Footer />
    </>
  );
}
