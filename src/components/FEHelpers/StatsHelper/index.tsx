import { customThrottle } from "@/utils/customThrottle";
import { useCallback, useEffect, useRef, useState } from "react";

const StatsHelper = () => {
    const statsOverlay = useRef<HTMLDivElement | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [fps, setFps] = useState(0);
    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());
    const animationFrameId = useRef<number | null>(null);

    // FPS calculation using requestAnimationFrame
    const calculateFPS = useCallback(() => {
        const currentTime = performance.now();
        frameCount.current += 1;
        const delta = currentTime - lastTime.current;

        if (delta >= 1000) {
            // Calculate FPS: frames counted divided by time in seconds
            const calculatedFps = Math.round((frameCount.current * 1000) / delta);
            setFps(calculatedFps);
            frameCount.current = 0;
            lastTime.current = currentTime;
        }

        animationFrameId.current = requestAnimationFrame(calculateFPS);
    }, []);

    // Update stats display
    const updateStats = useCallback(() => {
        if (statsOverlay.current) {
            statsOverlay.current.innerHTML = `
        <span>Window: ${window.innerWidth} x ${window.innerHeight}</span><br/>
        <span>Aspect Ratio: ${(window.innerWidth / window.innerHeight).toFixed(2)}</span><br/>
        <span>Device Pixel Ratio: ${window.devicePixelRatio}</span><br/>
        <span>Mouse: (${mousePos.x}, ${mousePos.y})</span><br/>
        <span>FPS: ${fps}</span>
      `;
        }
    }, [mousePos, fps]);

    // Throttled event handlers
    const throttledUpdateStats = customThrottle(updateStats, 100); // Update every 100ms
    const throttledMouseMove = customThrottle((e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    }, 100); // Update mouse position every 100ms

    useEffect(() => {
        animationFrameId.current = requestAnimationFrame(calculateFPS);

        updateStats();

        const keydownHandler = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "s") {
                statsOverlay.current?.classList.toggle("show");
            }
        };

        window.addEventListener("resize", throttledUpdateStats);
        window.addEventListener("mousemove", throttledMouseMove);
        document.addEventListener("keydown", keydownHandler);

        // Cleanup
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener("resize", throttledUpdateStats);
            window.removeEventListener("mousemove", throttledMouseMove);
            document.removeEventListener("keydown", keydownHandler);
        };
    }, [
        mousePos,
        fps,
        calculateFPS,
        throttledMouseMove,
        throttledUpdateStats,
        updateStats
    ]);

    return (
        <div
            ref={statsOverlay}
            className="statsContainer z-50 fixed top-0 left-0 p-2 bg-black text-white text-sm opacity-0 transition-opacity duration-300"
        ></div>
    );
};

export default StatsHelper;