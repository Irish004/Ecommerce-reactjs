import { useEffect, useRef, useState } from 'react';

const useTranslateX = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const prevScrollPosition = useRef(0);
    const [translateXPosition, setTranslateXPosition] = useState(80);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > prevScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < prevScrollPosition.current) {
            setScrollDirection('up');
        }
        prevScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };
    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 3300) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDirection === 'up') {
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);
    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);
    return {
        translateXPosition,
        handleTranslateX,
    };
};
export default useTranslateX;
