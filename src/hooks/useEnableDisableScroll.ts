import { useRef } from "react";

export default (): Array<() => void> | null => {
    const documentHtml = document;
    if (documentHtml !== document) return null;

    const scrollBlocked = useRef(null) as { current: null | boolean };
    const html = documentHtml.documentElement;
    const { body } = documentHtml;

    const blockScroll = (): void | null => {
        if (!body || !body.style || scrollBlocked.current) return null;

        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyPaddingRight =
            parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

        html.style.position = "relative"; /* [1] */
        html.style.overflow = "hidden"; /* [2] */
        body.style.position = "relative"; /* [1] */
        body.style.overflow = "hidden"; /* [2] */
        body.style.paddingRight = `${ bodyPaddingRight + scrollBarWidth }px`;

        scrollBlocked.current = true;
    };

    const allowScroll = (): void | null => {
        if (!body || !body.style || !scrollBlocked.current) return null;

        html.style.position = "";
        html.style.overflow = "";
        body.style.position = "";
        body.style.overflow = "";
        body.style.paddingRight = "";

        scrollBlocked.current = false;
    };

    return [blockScroll, allowScroll];
};