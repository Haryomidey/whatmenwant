import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { featuredItems } from "../data/featured";
import { Link } from "react-router-dom";

const Featured = () => {
    return (
        <section
            id="featured"
            className="py-20 px-8 md:px-16 bg-white overflow-hidden"
        >
            <motion.div
                className="flex justify-between items-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h3 className="text-3xl font-bold text-gray-800">
                    Featured Insights
                </h3>
                <Link
                    to="/featured"
                    className="text-emerald-600 flex items-center gap-2 hover:underline font-medium"
                >
                    View All <FiArrowRight />
                </Link>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-3 gap-10"
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
                {featuredItems.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Link
                            to={item.link}
                            className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden block group"
                        >
                            <motion.img
                                src={item.img}
                                alt={item.title}
                                className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-6">
                                <div className="mb-3">
                                    <item.icon className="text-emerald-600 text-2xl" />
                                </div>
                                <h4 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-emerald-700 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Featured;