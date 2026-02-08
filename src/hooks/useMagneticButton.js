import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Hook for creating magnetic button effect
 * Button follows cursor when nearby
 */
export function useMagneticButton(strength = 0.3) {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const buttonCenterX = rect.left + rect.width / 2;
            const buttonCenterY = rect.top + rect.height / 2;

            const distanceX = e.clientX - buttonCenterX;
            const distanceY = e.clientY - buttonCenterY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            // Only activate within 100px radius
            if (distance < 100) {
                gsap.to(button, {
                    x: distanceX * strength,
                    y: distanceY * strength,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)',
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return buttonRef;
}
