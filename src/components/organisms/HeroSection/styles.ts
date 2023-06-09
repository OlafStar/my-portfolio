import styled from 'styled-components';
import {above} from '~constants/breakpoints';

export const HeroSectionContainer = styled.div`
    background-color: #000;
    width: 100%;
    height: 100%;
    padding: 100px;
`;

export const HeroTextContainer = styled.div`
    color: white;
    font-family: 'Anton';
    font-size: 128px;
    line-height: 100%;
    letter-spacing: 25px;
    text-transform: uppercase;
    ${above.desktop} {
        font-size: clamp(8rem, -5.012rem + 14.4578vw, 32rem);
    }
`;

export const Subtitle = styled.p`
    transform: translateX(3px);
    font-family: 'Antonio';
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 19.5px;
    ${above.desktop} {
        font-size: clamp(2rem, -1.253rem + 3.6145vw, 8rem);
    }
`;
