import React from 'react';
import './BaniSection.css';

const quotes = [
    {
        id: 1,
        text: "কমদামি চাল খাইলে ঘুম ভালো হয়, আর ঘুম ভালো হইলে আইডিয়া ভালো আসে। মিল রেটও বাঁচে।",
        context: "Economic Nutrition"
    },
    {
        id: 2,
        text: "মিলের রেট কমাতে চাইলে ডিমের বিকল্প নাই। সকাল-বিকাল ডিম, বুদ্ধি হবে অসীম।",
        context: "Meal Rate Strategy"
    },
    {
        id: 3,
        text: "রাত ১১টার পর ডাইনিংয়ের লাইট যে জ্বালাবে, তার মিল অফ। কারেন্ট বিল কি তোর ফুপা দিবে?",
        context: "Cost Cutting"
    },
    {
        id: 3,
        text: "তোমাদের সব আবদার আমি চাঙ্গে তুলে রাখলাম। এখন যাও, পড়তে বসো।",
        context: "Management Style"
    },
    {
        id: 4,
        text: "মেম্বারদের টাকা আর আমার ম্যানেজমেন্ট - এই দুইয়ে মিলেই দিস ইজ আলম গ্রুপ।",
        context: "Business Model"
    },
    {
        id: 5,
        text: "সিঁড়ির লাইটটা অফ রাখলেই তো হয়, বেকার জ্বলে ওইটা। আমার হার্ট জ্বলে।",
        context: "Energy Saving"
    }
];

const BaniSection = () => {
    return (
        <section className="bani-section">
            <div className="bani-header">
                <p className="bani-subtitle">Words of Wisdom</p>
                <h2 className="bani-title">CEO বাণী</h2>
            </div>

            <div className="bani-grid">
                {quotes.map((quote) => (
                    <div key={quote.id} className="bani-card">
                        <span className="quote-icon">“</span>
                        <p className="bani-text">{quote.text}</p>
                        <span className="bani-author">- মফিকুল আলম <span>(CEO)</span></span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BaniSection;
