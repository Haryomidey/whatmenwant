import { FaPeace, FaHeart, FaHandshake } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { images } from "../../assets/images";

const Featured = () => {
    const items = [
        {
            icon: <FaPeace />,
            title: "Peace",
            text: "Men crave calm — not because they're weak, but because chaos is everywhere else.",
            img: images.PeacefulMan,
            link: "/featured/peace",
        },
        {
            icon: <FaHeart />,
            title: "Loyal Love",
            text: "Men want love they can trust — not perfection, just peace and loyalty.",
            img: images.LoyalLove,
            link: "/featured/loyal-love",
        },
        {
            icon: <FaHandshake />,
            title: "Respect",
            text: "Respect isn't a demand — it's the language men understand the most.",
            img: images.RespectMen,
            link: "/featured/respect",
        },
    ];

    return (
        <section id="featured" className="py-20 px-8 md:px-16 bg-white">
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-bold">Featured Insights</h3>
                <a href="/featured" className="text-emerald-600 flex items-center gap-2 hover:underline">
                    View All <FiArrowRight />
                </a>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {items.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden block"
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

export default Featured;