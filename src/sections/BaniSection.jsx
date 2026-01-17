import React from 'react';

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
        text: "সিঁড়ির লাইটটা অফ রাখলেই তো হয়, বেকার জ্বলে ওইটা।",
        context: "Energy Saving"
    }
];

const BaniSection = () => {
    return (
        <section className="bg-base-charcoal-light py-24 px-6 text-center border-t border-white/5">
            <div className="mb-16">
                <p className="text-brand-orange text-lg font-semibold tracking-[2px] uppercase mb-4">Words of Wisdom</p>
                <h2 className="text-base-white text-5xl font-bold uppercase">CEO বাণী</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {quotes.map((quote) => (
                    <div key={quote.id} className="group relative bg-base-charcoal p-12 rounded-card border border-white/5 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange">
                        <span className="absolute top-4 left-6 text-brand-orange/20 text-7xl font-serif leading-none italic select-none">“</span>
                        <p className="font-solaiman text-2xl text-base-off-white leading-relaxed font-medium z-10 relative">
                            {quote.text}
                        </p>
                        <span className="block mt-8 text-base-off-white/40 font-bold text-sm tracking-wide z-10 relative">
                            - মাফিকুল আলম <span className="text-brand-orange font-normal">(CEO)</span>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BaniSection;
