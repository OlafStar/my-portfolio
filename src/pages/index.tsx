import {NextPage} from 'next';
import AboutSection from '~components/organisms/AboutSection';
import HeroSection from '~components/organisms/HeroSection';
import Layout from '~components/organisms/Layout';
import ServicesSection from '~components/organisms/ServicesSection';

const Index: NextPage = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
        </Layout>
    );
};

export default Index;
