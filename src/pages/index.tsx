import {NextPage} from 'next';
import AboutSection from '~components/organisms/AboutSection';
import HeroSection from '~components/organisms/HeroSection';
import Layout from '~components/organisms/Layout';

const Index: NextPage = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
        </Layout>
    );
};

export default Index;
