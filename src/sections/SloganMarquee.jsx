import React, { useState, useEffect } from 'react';
import './SloganMarquee.css';

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
        <div className="slogan-marquee">
            <div className="slogan-container">
                <p className="slogan-text">{slogans[index]}</p>
                <span className="slogan-author">Mafikul Alom</span>
            </div>
        </div>
    );
};

export default SloganMarquee;
