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
        <section id="testimonials" className="py-20 px-8 md:px-16 bg-white">
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-bold">What People Are Saying</h3>
                <a href="/testimonials" className="text-emerald-600 flex items-center gap-2 hover:underline">
                    View All <FiArrowRight />
                </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-xl">
                        <p className="italic text-gray-700 mb-4">“{t.text}”</p>
                        <p className="font-semibold text-emerald-700">{t.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;