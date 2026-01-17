import React from 'react';
import './CEOWithClients.css'; // Reusing the same CSS as it works perfect

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
        <section className="clients-section">
            <div className="clients-header">
                <p className="clients-subtitle">Mess Management</p>
                <h2 className="clients-title">CEO <span>vs</span> Members</h2>
            </div>

            <div className="clients-grid">
                {memberInteractions.map((item) => (
                    <div key={item.id} className="client-card">
                        <span className="client-type-badge">{item.memberType}</span>

                        <div className="interaction-block">
                            <span className="interaction-label">Member Says:</span>
                            <p className="client-says">"{item.memberAsk}"</p>
                        </div>

                        <div className="interaction-block">
                            <span className="interaction-label" style={{ color: 'var(--brand-orange)' }}>CEO Replies:</span>
                            <p className="ceo-replies">"{item.ceoReply}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CEOWithMembers;
