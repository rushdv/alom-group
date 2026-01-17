import React, { useState, useEffect } from 'react';

const slogans = [
    "meal rate কমানো কোনো কৃপণতা না, এটা সবাইকে চাঙ্গে উঠানোর ব্যবস্থাপনা।",
    "লাইট বন্ধ রাখলে অন্ধকার বাড়ে না, বরং ভবিষ্যৎ চাঙ্গে যায়",
    "আরাম মানুষকে নরম করে, কিন্তু কষ্ট মানুষকে চাঙ্গে উঠায়",
    "সকালে ডিম, দুপুরে ডিম, রাতে ডিম—এতে শরীর নয়, ভবিষ্যৎ শক্ত হয়।"
];

const SloganMarquee = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slogans.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-base-charcoal py-12 px-4 overflow-hidden border-y border-brand-orange/30">
            <div className="max-w-[900px] mx-auto text-center min-h-[120px] flex flex-col justify-center items-center">
                <p className="font-solaiman text-xl md:text-3xl text-base-white leading-relaxed mb-4 font-semibold animate-fadeInOut">
                    {slogans[index]}
                </p>
                <span className="text-brand-orange font-oswald uppercase tracking-[2px] text-sm opacity-80">
                    Mafikul Alom
                </span>
            </div>
        </div>
    );
};

export default SloganMarquee;
