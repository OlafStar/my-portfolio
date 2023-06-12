import {useEffect, useState} from 'react';
import {
    AnimationBlend,
    BigServiceText,
    HoverBackground,
    Line,
    Service,
    ServiceContent,
    ServiceTextContainer,
    ServicesSectionContainer,
    SmallServiceText,
} from './styles';

const services = [
    {number: 1, text: 'Website development'},
    {number: 2, text: 'Smart contract development'},
    {number: 3, text: '3D Websites'},
    {number: 4, text: 'E-commerce'},
    {number: 5, text: 'Wordpress and webflow'},
];

const ServicesSection = () => {
    const [hover, setHover] = useState(false);
    return (
        <ServicesSectionContainer>
            {services.map((item, index) => (
                <Service>
                    <Line />
                    <ServiceContent>
                        <ServiceTextContainer
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            onClick={() => console.log('work')}
                        >
                            <SmallServiceText>
                                {item.number < 10 ? `0${item.number}` : item.number}
                            </SmallServiceText>
                            <BigServiceText>{item.text}</BigServiceText>
                            <HoverBackground>
                                <AnimationBlend />
                                <AnimationBlend bottom />
                            </HoverBackground>
                        </ServiceTextContainer>
                    </ServiceContent>
                    {index === services.length - 1 && <Line />}
                </Service>
            ))}
        </ServicesSectionContainer>
    );
};
export default ServicesSection;
