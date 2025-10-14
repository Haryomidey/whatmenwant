import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { images } from "../../assets/images";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-36 pb-20 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white overflow-hidden">
            <motion.div
                className="max-w-xl mb-10 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h2
                    className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    What Do Men Really Want?
                </motion.h2>

                <motion.p
                    className="text-lg text-emerald-100 mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    It's not about guessing anymore — discover what men truly value in life, love, and purpose.
                </motion.p>

                <motion.a
                    href="#featured"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition flex items-center gap-2 w-fit shadow-lg"
                >
                    Explore Now <FiArrowRight className="text-emerald-600" />
                </motion.a>
            </motion.div>

            <motion.div
                className="flex justify-center w-full md:w-[45%]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                <motion.img
                    src={images.HeroMenGroup}
                    alt="Group of confident men"
                    className="rounded-2xl shadow-xl w-full md:w-[500px] object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;