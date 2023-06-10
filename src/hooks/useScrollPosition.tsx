import {useState, useEffect} from 'react';

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScrollPosition = () => {
        setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollPosition);
        return () => window.removeEventListener('scroll', updateScrollPosition);
    }, []);

    return scrollPosition;
};

export default useScrollPosition;
