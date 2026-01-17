import React from 'react';
import './CEOWithClients.css';

const interactions = [
    {
        id: 1,
        clientType: "The Low Budget Client",
        clientAsk: "Can you build 'Facebook' for $50?",
        ceoReply: "বাজেট ৫০ ডলার? ঠিক আছে। শুধু লগইন পেজ পাবেন, কিন্তু পাসওয়ার্ড দিলে এরর দেখাবে। এটাই প্রিমিয়াম ফিচার।"
    },
    {
        id: 2,
        clientType: "The 'Urgent' Client",
        clientAsk: "I need this done by yesterday.",
        ceoReply: "টাইম মেশিনটা চার্জে দিয়েছি। চার্জ হলে কালকে গিয়ে গতকালকের কাজটা করে দিবো। নো টেনশন।"
    },
    {
        id: 3,
        clientType: "The Micro-Manager",
        clientAsk: "Make the logo bigger, make it pop!",
        ceoReply: "লোগো সাইজ তো ঠিক আছে, আপনার স্ক্রিনটা একটু ছোট মনে হচ্ছে। নতুন মনিটর কিনে ফেলুন।"
    },
    {
        id: 4,
        clientType: "The AI Enthusiast",
        clientAsk: "Can we use Blockchain AI for this blog?",
        ceoReply: "ব্লকচেইন দিয়ে ব্লগ লিখলে তো কলমের কালি ফুরাবে না। আইডিয়াটা নিলাম, রয়্যালটি পাবেন না।"
    }
];

const CEOWithClients = () => {
    return (
        <section className="clients-section">
            <div className="clients-header">
                <p className="clients-subtitle">Global Relations</p>
                <h2 className="clients-title">Handling Clients</h2>
            </div>

            <div className="clients-grid">
                {interactions.map((item) => (
                    <div key={item.id} className="client-card">
                        <span className="client-type-badge">{item.clientType}</span>

                        <div className="interaction-block">
                            <span className="interaction-label">Client Asks:</span>
                            <p className="client-says">"{item.clientAsk}"</p>
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

export default CEOWithClients;
