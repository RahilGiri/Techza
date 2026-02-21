import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        // Hide default cursor on body
        document.body.style.cursor = 'none';

        // Setup GSAP QuickSetters for performance
        const setDotX = gsap.quickSetter(cursorDot, "x", "px");
        const setDotY = gsap.quickSetter(cursorDot, "y", "px");
        const setOutlineX = gsap.quickSetter(cursorOutline, "x", "px");
        const setOutlineY = gsap.quickSetter(cursorOutline, "y", "px");

        // Mouse Position Refs for Lerping
        const mouse = { x: 0, y: 0 };
        const pos = { x: 0, y: 0 };

        const onMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Dot follows instantly
            setDotX(mouse.x);
            setDotY(mouse.y);
        };

        const onMouseEnter = () => {
            gsap.to(cursorDot, { scale: 0, duration: 0.3 });
            gsap.to(cursorOutline, {
                scale: 1.5,
                backgroundColor: 'rgba(182, 255, 51, 0.1)',
                borderColor: 'rgba(182, 255, 51, 0.5)',
                duration: 0.3
            });
        };

        const onMouseLeave = () => {
            gsap.to(cursorDot, { scale: 1, duration: 0.3 });
            gsap.to(cursorOutline, {
                scale: 1,
                backgroundColor: 'transparent',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                duration: 0.3
            });
        };

        // Attach event listeners to all interactive elements
        const addListeners = () => {
            const interactables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', onMouseEnter);
                el.addEventListener('mouseleave', onMouseLeave);
                el.style.cursor = 'none';
            });
        };

        addListeners();

        // Ticker loop
        const loop = () => {
            // Calculate Lerp physics (0.2 factor) for outline
            pos.x += (mouse.x - pos.x) * 0.2;
            pos.y += (mouse.y - pos.y) * 0.2;

            setOutlineX(pos.x);
            setOutlineY(pos.y);
        };

        gsap.ticker.add(loop);

        window.addEventListener("mousemove", onMouseMove);

        // Re-run listener attachment occasionally in case of client-side routing changes
        const observer = new MutationObserver(() => {
            addListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            gsap.ticker.remove(loop);
            observer.disconnect();
            document.body.style.cursor = 'auto';

            // Clean up custom cursor from interactables
            const interactables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
                el.style.cursor = 'auto';
            });
        };
    }, []);

    // Return completely un-styled base divs, apply tailwind classes carefully.
    // Pointer-events-none is absolutely critical so it doesn't block underlying clicks.
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference">
            <div
                ref={cursorDotRef}
                className="absolute w-2 h-2 bg-brand-green rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform"
            ></div>
            <div
                ref={cursorOutlineRef}
                className="absolute w-10 h-10 border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform backdrop-blur-[1px] transition-colors"
                style={{ top: 0, left: 0 }}
            ></div>
        </div>
    );
};

export default CustomCursor;
