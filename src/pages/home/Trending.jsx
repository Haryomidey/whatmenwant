import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { trendingItems } from "../data/trending";

const Trending = () => {

    return (
        <section id="trending" className="py-20 px-8 md:px-16 bg-gray-50">
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-bold">Trending Topics</h3>
                <Link to="/trending" className="text-emerald-600 flex items-center gap-2 hover:underline">
                    View All <FiArrowRight />
                </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {trendingItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={i}
                            to={item.link}
                            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden block"
                        >
                            <img src={item.img} alt={item.title} className="h-52 w-full object-cover" />
                            <div className="p-6">
                                <Icon className="text-emerald-600 text-2xl" />
                                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    );
};

export default Trending;