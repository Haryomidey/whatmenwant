import { FiArrowRight } from "react-icons/fi";
import { images } from "../../assets/images";

const Stories = () => {
    const stories = [
        {
            img: images.StoryMan1,
            title: "I Stopped Chasing Peace Outside",
            text: "For years, I thought peace came from money and success. Then I realized — I was just tired.",
            link: "/stories/peace-within",
        },
        {
            img: images.StoryMan2,
            title: "Why I Walked Away",
            text: "Sometimes, walking away isn't weakness. It's the strongest thing a man can do for his sanity.",
            link: "/stories/walked-away",
        },
        {
            img: images.StoryMan3,
            title: "The Day I Opened Up",
            text: "That day I cried in front of my friend — he didn't mock me. He listened. It changed everything.",
            link: "/stories/opened-up",
        },
    ];

    return (
        <section id="stories" className="py-20 px-8 md:px-16 bg-white">
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-bold">Real Stories From Men</h3>
                <a href="/stories" className="text-emerald-600 flex items-center gap-2 hover:underline">
                    View All <FiArrowRight />
                </a>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {stories.map((story, i) => (
                    <a
                        key={i}
                        href={story.link}
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
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Stories;