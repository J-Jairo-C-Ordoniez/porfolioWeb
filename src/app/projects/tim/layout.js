import TimNavWrapper from "@/features/tim/components/TimNavWrapper";
import Footer from "@/shared/components/footer/Footer";

export default function TimLayout({ children }) {
  return (
    <div className="min-h-screen bg-primary text-background selection:bg-background selection:text-primary">
      <TimNavWrapper />
      {children}
      <Footer mode="dark" />
    </div>
  );
}
