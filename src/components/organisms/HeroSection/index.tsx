import {HeroSectionContainer, HeroTextContainer, Subtitle} from './styles';

const HeroSection = () => {
    return (
        <HeroSectionContainer>
            <HeroTextContainer>
                <p>{'Frontend'}</p>
                <p>{'Developer'}</p>
                <Subtitle>{'Olaf Nieliwodzki'}</Subtitle>
            </HeroTextContainer>
        </HeroSectionContainer>
    );
};

export default HeroSection;
