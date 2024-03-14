import { useState, useEffect } from "react";
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        weight: undefined,
        height: undefined,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                weight: window.innerWidth,
                height: window.innerHeight,
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        const cleanup = () => {
            console.log("runs when useeffect dep changes");
            window.removeEventListener("resize", handleResize);
        };
        return cleanup;
    }, []);
    return windowSize;
};
export default useWindowSize;
