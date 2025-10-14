import { FaBrain, FaBriefcase, FaComments } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { images } from "../../assets/images";

const Trending = () => {
    const items = [
        {
            icon: <FaBrain />,
            title: "Mental Health Matters",
            text: "Men are finally opening up about anxiety, purpose, and emotional strength.",
            img: images.MentalHealth,
            link: "/trending/mental-health",
        },
        {
            icon: <FaBriefcase />,
            title: "Career & Purpose",
            text: "It's not just about money anymore — it's about meaning and impact.",
            img: images.CareerPurpose,
            link: "/trending/career-purpose",
        },
        {
            icon: <FaComments />,
            title: "Modern Relationships",
            text: "The dating world is shifting — and so are men's expectations.",
            img: images.ModernRelationship,
            link: "/trending/modern-relationships",
        },
    ];

    return (
        <section id="trending" className="py-20 px-8 md:px-16 bg-gray-50">
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-bold">Trending Topics</h3>
                <a href="/trending" className="text-emerald-600 flex items-center gap-2 hover:underline">
                    View All <FiArrowRight />
                </a>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {items.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden block"
                    >
                        <img src={item.img} alt={item.title} className="h-52 w-full object-cover" />
                        <div className="p-6">
                            <div className="text-3xl text-emerald-600 mb-3">{item.icon}</div>
                            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Trending;