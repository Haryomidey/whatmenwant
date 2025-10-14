import { FiArrowRight } from "react-icons/fi";
import { images } from "../../assets/images";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white">
            <div className="max-w-xl mb-10 md:mb-0">
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    What Do Men Really Want?
                </h2>
                <p className="text-lg text-emerald-100 mb-8">
                    It's not about guessing anymore — discover what men truly value in life, love, and purpose.
                </p>
                <a href="#featured" className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition flex items-center gap-2 w-fit">
                    Explore Now <FiArrowRight />
                </a>
            </div>
            <div className="flex justify-center w-full md:w-[45%]">
                <img
                    src={images.HeroMenGroup}
                    alt="Group of confident men"
                    className="rounded-2xl shadow-xl w-full md:w-[500px] object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;