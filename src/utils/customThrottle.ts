// Custom throttle function with explicit argument typing
export function customThrottle<T extends (...args: Parameters<T>) => void>(
    func: T,
    wait: number
) {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = performance.now();
        if (now - lastCall >= wait) {
            func(...args);
            lastCall = now;
        }
    };
}