import Header from "../../components/Header";
import Hero from "./Hero";
import Featured from "./Featured";
import Trending from "./Trending";
import Stories from "./Stories";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div className="font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
            <Header />
            <Hero />
            <Featured />
            <Trending />
            <Stories />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;