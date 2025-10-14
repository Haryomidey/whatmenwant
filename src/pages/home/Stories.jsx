import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { stories } from "../data/stories";

const Stories = () => {

    return (
        <section id="stories" className="py-20 px-8 md:px-16 bg-white">
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-bold">Real Stories From Men</h3>
                <Link to="/stories" className="text-emerald-600 flex items-center gap-2 hover:underline">
                    View All <FiArrowRight />
                </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {stories.map((story, i) => (
                    <Link
                        key={i}
                        to={story.link}
                        className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden block"
                    >
                        <img src={story.img} alt={story.title} className="h-52 w-full object-cover" />
                        <div className="p-6">
                            <h4 className="text-xl font-semibold mb-2">{story.title}</h4>
                            <p className="text-gray-600 mb-4">{story.text}</p>
                            <span className="text-emerald-600 font-semibold flex items-center gap-1">
                                Read More <FiArrowRight />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Stories;