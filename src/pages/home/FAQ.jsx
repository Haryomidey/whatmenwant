
const FAQ = () => {
    const faqs = [
        { q: "Do men really know what they want?", a: "Most do — they just don't always know how to say it." },
        { q: "Is this site only for women?", a: "No. It's for anyone who wants to understand men better — including men themselves." },
        { q: "Where do the ideas come from?", a: "From real stories, honest talks, and shared experiences." },
        { q: "Why focus on men?", a: "Because men are often misunderstood, and this space gives voice to that truth." },
        { q: "Can I share my own story?", a: "Yes. We're always open to authentic stories that can help others." },
    ];

    return (
        <section id="faq" className="py-20 px-8 md:px-16 bg-gray-50">
            <h3 className="text-3xl font-bold mb-10">FAQ</h3>
            <div className="space-y-6">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                        <p className="text-gray-600">{faq.a}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;