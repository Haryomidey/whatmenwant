import { images } from "../../assets/images";
import { FaBrain, FaBriefcase, FaComments } from "react-icons/fa";

export const trendingItems = [
    {
        icon: FaBrain,
        title: "Mental Health Matters",
        text: "Men are finally opening up about anxiety, purpose, and emotional strength.",
        img: images.MentalHealth,
        link: "/trending/mental-health",
        html: `
            <article class="trending">
                <h2>Mental Health Matters</h2>
                <p><strong>By Tunde — Lagos</strong></p>

                <p>For the longest time, I used to think mental health talk was for oyinbo people. Growing up, anytime a man complained about being tired or stressed, people would just say, “You be man, no dey weak.”</p>

                <p>But in 2022, everything caught up with me. Work pressure, bills, relationship wahala — it all piled up. One night, I just sat in my car and cried. I didn't even understand why, I just broke down. That was when I knew something had to change.</p>

                <p>I started talking to a counselor online. At first, it felt awkward, but the more I opened up, the lighter I felt. I realized I wasn't broken — I was just tired of pretending to be fine.</p>

                <blockquote>
                    “Strength isn't silence. It's admitting when your mind needs help.”
                </blockquote>

                <p>Now, I take breaks without guilt. I rest. I talk. I journal. Mental health is not a luxury — it's survival. Men deserve that peace too.</p>
            </article>
        `,
    },

    {
        icon: FaBriefcase,
        title: "Career & Purpose",
        text: "It's not just about money anymore — it's about meaning and impact.",
        img: images.CareerPurpose,
        link: "/trending/career-purpose",
        html: `
            <article class="trending">
                <h2>Career & Purpose</h2>
                <p><strong>By Kunle — Abuja</strong></p>

                <p>I chased money for years. I switched jobs like it was a sport — tech, marketing, even real estate. But no matter how much I earned, I still felt empty.</p>

                <p>Then one day, I met an old friend who told me, “Bro, purpose pays in peace first before it pays in money.” That thing stayed in my head.</p>

                <p>I started mentoring young boys in my area, teaching them coding for free on weekends. The first time one of them got his first job offer, I felt something I hadn't felt in years — joy that made sense.</p>

                <blockquote>
                    “Purpose doesn't always show up with a paycheck. Sometimes it shows up with peace.”
                </blockquote>

                <p>Now, I still work, but I work differently. I chase fulfillment, not just salary. That's what most men are realizing now — money helps, but meaning keeps you alive.</p>
            </article>
        `,
    },

    {
        icon: FaComments,
        title: "Modern Relationships",
        text: "The dating world is shifting — and so are men's expectations.",
        img: images.ModernRelationship,
        link: "/trending/modern-relationships",
        html: `
            <article class="trending">
                <h2>Modern Relationships</h2>
                <p><strong>By Femi — Port Harcourt</strong></p>

                <p>Dating these days feels like a competition — who can pretend less, who can post more, who can love quieter. But deep down, most men just want something real.</p>

                <p>I met a girl last year who was different. No filters, no games. She asked real questions like, “What scares you most?” That's when I realized how lonely I had been — even when I was surrounded by people.</p>

                <p>We don't always agree, but we talk through things. No shouting, no ego. Just honesty. That's rare these days.</p>

                <blockquote>
                    “Men want love that feels safe, not love that feels like a test.”
                </blockquote>

                <p>Modern relationships are not about control anymore. It's about communication, respect, and choosing each other daily — not because it's easy, but because it's worth it.</p>
            </article>
        `,
    },
];