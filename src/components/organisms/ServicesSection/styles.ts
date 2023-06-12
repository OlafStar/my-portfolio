import {motion} from 'framer-motion';
import styled from 'styled-components';

export const ServicesSectionContainer = styled.div`
    width: 100%;
    background-color: black;
    padding: 100px;
`;

export const Service = styled.div`
    position: relative;
    font-family: 'Anton';
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
`;

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: white;
`;

export const ServiceContent = styled.div`
    padding: 32px 0px 32px 16px;
    display: flex;
`;

export const ServiceTextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    width: fit-content;
`;

export const SmallServiceText = styled.div`
    font-size: 32px;
    line-height: 100%;
    text-transform: uppercase;
`;

export const BigServiceText = styled.div`
    font-size: 48px;
    line-height: 100%;
    text-transform: uppercase;
`;

export const HoverBackground = styled.div`
    position: absolute;
    inset: 0 0 0 0;
`;

type AnimationBlendProps = {
    bottom?: boolean;
};

export const AnimationBlend = styled.div<AnimationBlendProps>`
    position: relative;
    width: 100%;
    height: 50%;
    overflow: hidden;
    bottom: 0%;

    &::before {
        content: '';
        background-color: white;
        mix-blend-mode: difference;
        position: absolute;
        width: 100%;
        height: 100%;
        top: ${({bottom}) => !bottom && '100%'};
        bottom: ${({bottom}) => bottom && '100%'};
        transition: 0.5s ease-in-out;
    }

    ${ServiceTextContainer}:hover &::before {
        bottom: ${({bottom}) => bottom && '0%'};
        top: ${({bottom}) => !bottom && '0%'};
    }
`;
