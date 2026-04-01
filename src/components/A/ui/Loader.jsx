export function ALoader() {
  const spinnerRef = useRef(null);

  useEffect(() => {
    if (spinnerRef.current) {
      gsap.to(spinnerRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div
        ref={spinnerRef}
        className="h-8 w-8 rounded-full border-2 border-white/5 border-t-accent"
      />
    </div>
  );
}
