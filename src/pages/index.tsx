import {NextPage} from 'next';
import HeroSection from '~components/organisms/HeroSection';
import Layout from '~components/organisms/Layout';

const Index: NextPage = () => {
    return (
        <Layout>
            <HeroSection />
        </Layout>
    );
};

export default Index;
