export default function BugPrefersUserLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-primary selection:text-background">
      {children}
    </div>
  );
}
