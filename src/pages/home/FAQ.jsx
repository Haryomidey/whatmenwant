import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
    const faqs = [
        { q: "Do men really know what they want?", a: "Most do — they just don't always know how to say it." },
        { q: "Is this site only for women?", a: "No. It's for anyone who wants to understand men better — including men themselves." },
        { q: "Where do the ideas come from?", a: "From real stories, honest talks, and shared experiences." },
        { q: "Why focus on men?", a: "Because men are often misunderstood, and this space gives voice to that truth." },
        { q: "Can I share my own story?", a: "Yes. We're always open to authentic stories that can help others." },
    ];

    const [active, setActive] = useState(null);

    return (
        <section
            id="faq"
            className="py-20 px-8 md:px-16 bg-gray-50 overflow-hidden"
        >
            <motion.h3
                className="text-3xl font-bold mb-10 text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Frequently Asked Questions
            </motion.h3>

            <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                }}
            >
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
                        onClick={() => setActive(active === i ? null : i)}
                    >
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-lg text-gray-800">
                                {faq.q}
                            </h4>
                            {active === i ? (
                                <FiChevronUp className="text-emerald-600 text-xl" />
                            ) : (
                                <FiChevronDown className="text-emerald-600 text-xl" />
                            )}
                        </div>

                        <AnimatePresence>
                            {active === i && (
                                <motion.p
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-600 mt-3 leading-relaxed"
                                >
                                    {faq.a}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default FAQ;