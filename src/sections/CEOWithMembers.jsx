import React from 'react';

const memberInteractions = [
    {
        id: 1,
        memberType: "The Foodie Member",
        memberAsk: "ভাই, আজকে তো শুক্রবার, একটু গরুর মাংস খাইলে ভালো হইতো না?",
        ceoReply: "গরু খাইলে গরুর মতো বুদ্ধি হবে। তার চেয়ে ডিম খাও, প্রোটিনও পাবে, মিল রেটও কমবে।"
    },
    {
        id: 2,
        memberType: "The Night Owl",
        memberAsk: "ভাই, আমি তো রাতে জেগে কাজ করি, ডাইনিংয়ের লাইটটা একটু জ্বালাই?",
        ceoReply: "লাইট জ্বালালে কারেন্ট বিল আসবে। মোবাইলের ফ্লাশ দিয়ে কাজ করো। স্ট্রাগল করলেই সাকসেস আসবে।"
    },
    {
        id: 4,
        memberType: "The Investor Wannabe",
        memberAsk: "ভাই, আলম গ্রুপের শেয়ার মার্কেটে কবে আসবে? আমি ইনভেস্ট করতে চাই।",
        ceoReply: "আগে মেস ভাড়াটা ঠিকমতো দে, তারপর শেয়ারের স্বপ্ন দেখিস। শেয়ার এখন চাঙ্গে আছে。"
    },
    {
        id: 5,
        memberType: "The Victim",
        memberAsk: "ভাই, বাথরুমটা তো অনেকদিন ধরে পরিষ্কার হয় না, আর ময়লার বালতিও ভরে গেছে।",
        ceoReply: "বাথরুম নোংরা থাকা মানে মেস মেম্বারদের ইমিউনিটি সিস্টেম স্ট্রং হচ্ছে। আর ময়লা আমি দেখি না, আমি ভিশন দেখি।"
    },
    {
        id: 6,
        memberType: "The New Member",
        memberAsk: "ভাই, খালা তো আজকে ডাইনিং রুম ঝাড়ু দেয় নাই।",
        ceoReply: "নিজে ঝাড়ু দিলে শরীর ভালো থাকে। জিমে যাওয়া লাগে না। সব আমি দেখবো কেন?"
    },
    {
        id: 3,
        memberType: "The Complainer",
        memberAsk: "ভাই, ওয়াইফাই তো একদম স্লো। কাজ করা যাচ্ছে না।",
        ceoReply: "তোমার এই কমপ্লেইন আমি চাঙ্গে তুলে রাখলাম। নেট স্লো থাকলে ধৈর্য বাড়ে。"
    }
];

const CEOWithMembers = () => {
    return (
        <section className="bg-base-charcoal py-24 px-6 border-t border-white/5">
            <div className="text-center mb-16">
                <p className="text-brand-orange text-lg font-semibold tracking-[2px] uppercase mb-4 font-inter">Mess Management</p>
                <h2 className="text-base-white text-5xl font-bold uppercase font-oswald text-shadow-glow">CEO <span className="text-brand-orange">vs</span> Members</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {memberInteractions.map((item) => (
                    <div key={item.id} className="group bg-base-charcoal-light rounded-card p-8 border border-white/5 transition-all duration-300 hover:border-brand-orange hover:-translate-y-2 relative overflow-hidden">
                        <span className="inline-block bg-white/10 text-base-off-white/60 text-[0.65rem] px-3 py-1 rounded-full uppercase tracking-widest mb-6 font-bold">{item.memberType}</span>

                        <div className="mb-6">
                            <span className="block text-[0.7rem] uppercase text-white/30 font-bold mb-2 tracking-tighter">Member Says:</span>
                            <p className="font-inter italic text-base-off-white/80 pl-4 border-l-2 border-white/20">"{item.memberAsk}"</p>
                        </div>

                        <div className="bg-brand-orange/5 p-4 rounded-lg border border-brand-orange/10">
                            <span className="block text-[0.7rem] uppercase text-brand-orange font-bold mb-2 tracking-tighter">CEO Replies:</span>
                            <p className="font-solaiman text-brand-orange text-lg font-semibold leading-relaxed">"{item.ceoReply}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CEOWithMembers;
