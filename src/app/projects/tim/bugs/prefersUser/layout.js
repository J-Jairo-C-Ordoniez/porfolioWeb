import Footer from "@/shared/components/footer/Footer";

export default function BugPrefersUserLayout({ children }) {
  return (
    <div className="min-h-screen bg-primary text-background selection:bg-background selection:text-primary">
      {children}
      <Footer mode="dark" />
    </div>
  );
}
