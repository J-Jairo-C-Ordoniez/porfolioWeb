import KodaMenu from "@/features/koda/components/KodaMenu";

export default function KodaLayout({ children }) {
  return (
    <>
      <KodaMenu />
      {children}
    </>
  );
}
