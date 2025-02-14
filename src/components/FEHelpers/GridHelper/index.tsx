import { useEffect, useRef } from "react";

const GridHelper = () => {
    const gridOverlay = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const tag: Element = gridOverlay.current as Element;
        const resizeHandler = () => {
            const columnCount: number = parseInt(getComputedStyle(tag).getPropertyValue('--columns'));

            tag.innerHTML = ""
            for (let i = 0; i < columnCount; i++) {
                const col = document.createElement('div');
                tag.appendChild(col);
            }
        }

        const keydownHandler = (e: KeyboardEvent) => {
            const columnCount: number = parseInt(getComputedStyle(tag).getPropertyValue('--columns'));

            if (e.key.toLowerCase() === 'g') {
                tag.classList.toggle('show')
                tag.innerHTML = ""
                for (let i = 0; i < columnCount; i++) {
                    const col = document.createElement('div');
                    tag.appendChild(col);
                }
            }
        }

        const loadHandler = () => {
            const columnCount: number = parseInt(getComputedStyle(tag).getPropertyValue('--columns'));
            if (tag.classList.contains('show')) {
                tag.innerHTML = ""
                for (let i = 0; i < columnCount; i++) {
                    const col = document.createElement('div');
                    tag.appendChild(col);
                }
            }
        }

        window.addEventListener('load', loadHandler);
        window.addEventListener('resize', resizeHandler);
        document.addEventListener('keydown', (e) => keydownHandler(e));

        return () => {
            window.removeEventListener('load', loadHandler);
            window.removeEventListener('resize', resizeHandler);
            document.removeEventListener('keydown', keydownHandler);
        }
    }, [gridOverlay]);

    return (
        <div ref={gridOverlay} className={"grid-overlay container show"}>
        </div>
    )
}


export default GridHelper;