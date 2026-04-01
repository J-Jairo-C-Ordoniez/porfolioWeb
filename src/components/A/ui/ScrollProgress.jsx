export function AScrollProgress() {
    const progressRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (progressRef.current) {
                gsap.to(progressRef.current, {
                    scaleX: 1,
                    transformOrigin: "left",
                    ease: "none",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.3,
                    },
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[100]">
            <div
                ref={progressRef}
                className="h-full w-full bg-accent"
                style={{ scaleX: 0 }}
            />
        </div>
    );
}
