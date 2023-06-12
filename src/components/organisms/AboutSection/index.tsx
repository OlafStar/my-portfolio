import {useEffect, useMemo, useRef, useState} from 'react';
import {
    AboutSectionContainer,
    AboutTextContainer,
    TextLines,
    LineRelativeContainer,
    Mask,
    WhiteTextLines,
} from './styles';
import useScrollPosition from '~hooks/useScrollPosition';

const textLines = [
    'Passionate developer based in',
    'Poland. I’ve mastered the art of',
    'building websites in React. I would',
    'be excited to create stunning web',
    'design or future of the internet in',
    'blockchain for you',
];

const AboutSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const maskRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [progress, setProgress] = useState<number[]>([]);

    const scrollTop = useScrollPosition();

    useEffect(() => {
        setProgress(new Array(textLines.length).fill(0));
    }, []);

    useEffect(() => {
        maskRefs.current = maskRefs.current.slice(0, textLines.length);
    }, []);

    useEffect(() => {
        const progress = textLines.map((_, i) => {
            const maskEl = maskRefs.current[i];
            if (!maskEl) return 0;

            const maskTop = maskEl.getBoundingClientRect().top;
            const maskHeight = maskEl.offsetHeight;

            if (scrollTop >= maskTop) {
                const scrollProgress = (scrollTop - maskTop) / maskHeight;
                return Math.min(scrollProgress, 1) * 100; // clamp to 100%
            } else {
                return 0;
            }
        });

        setProgress(progress);
    }, [scrollTop]);

    return (
        <AboutSectionContainer ref={containerRef}>
            <AboutTextContainer>
                {textLines.map((text, index) => (
                    <LineRelativeContainer key={text}>
                        <TextLines>{text}</TextLines>
                        <WhiteTextLines
                            ref={(el) => (maskRefs.current[index] = el)}
                            animate={{width: `${progress[index]}%`}}
                            transition={{ease: 'linear'}}
                        >
                            {text}
                        </WhiteTextLines>
                    </LineRelativeContainer>
                ))}
            </AboutTextContainer>
        </AboutSectionContainer>
    );
};

export default AboutSection;
