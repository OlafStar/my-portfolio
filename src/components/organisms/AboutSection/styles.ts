import {motion} from 'framer-motion';
import {styled} from 'styled-components';
import {above} from '~constants/breakpoints';

export const AboutSectionContainer = styled.div`
    background-color: #000;
    padding: 100px 360px 100px 100px;

    ${above.desktop} {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
`;

export const AboutTextContainer = styled.div`
    font-family: 'Arial';
    font-size: 64px;
    line-height: 100%;

    ${above.desktop} {
        font-size: clamp(4rem, -1.4217rem + 6.0241vw, 14rem);
    }
`;

export const LineRelativeContainer = styled.div`
    position: relative;
`;

export const Mask = styled(motion.div)`
    position: absolute;
    inset: 0 0 0 0;
    background-color: white;
`;

export const TextLines = styled.p`
    -webkit-text-stroke: 1px rgba(255,255,255,0.2);

`;

export const WhiteTextLines = styled(motion.div)`
    position: absolute;
    inset: 0 0 0 0;
    -webkit-text-stroke: 0px white;
    color: white;
    overflow: hidden;
`;
