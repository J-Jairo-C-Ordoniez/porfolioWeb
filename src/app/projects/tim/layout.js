import TimNavWrapper from "@/features/tim/components/TimNavWrapper";
import Footer from "@/shared/components/footer/Footer";

export default function TimLayout({ children }) {
  return (
    <>
      <TimNavWrapper />
      {children}
      <Footer />
    </>
  );
}
