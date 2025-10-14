import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Testimonials = () => {
    const testimonials = [
        {
            text: "I used to think men were complicated. Turns out, they just wanted peace and appreciation.",
            author: "— Ada, Lagos",
        },
        {
            text: "This site changed how I understand my husband. Every woman needs to see this.",
            author: "— Funmi, Akure",
        },
        {
            text: "Reading the stories made me reflect on how I treat the men in my life. Eye-opening.",
            author: "— Chika, Abuja",
        },
    ];

    return (
        <section
            id="testimonials"
            className="py-20 px-8 md:px-16 bg-white overflow-hidden"
        >
            <motion.div
                className="flex justify-between items-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h3 className="text-3xl font-bold text-gray-800">
                    What People Are Saying
                </h3>
                <a
                    href="/testimonials"
                    className="text-emerald-600 flex items-center gap-2 hover:underline font-medium"
                >
                    View All <FiArrowRight />
                </a>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.15 },
                    },
                }}
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow:
                                "0px 8px 24px rgba(16, 185, 129, 0.2)",
                        }}
                        className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-xl transition-transform"
                    >
                        <p className="italic text-gray-700 mb-4 leading-relaxed">
                            “{t.text}”
                        </p>
                        <p className="font-semibold text-emerald-700">
                            {t.author}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Testimonials;