import React from 'react';
import './CEOWithKhala.css';

const dialogues = [
    {
        id: 1,
        ceo: "খালা, তরকারিতে তেলটা একটু কম করে দেন।",
        khala: "তাহলে তরকারি কি পানি দিয়ে রান্না করবো ? ছোট মামা, স্বাদ লাগলে তেল তো লাগবোই।"
    },
    {
        id: 2,
        ceo: "খালা, তরকারিতে ঝালটা কমায় দিয়েন",
        khala: "কই ছোট মামা, ঝাল তো কমিয়েই দিছি। আপনি ঝাল বেশি বুঝেন。"
    },
    {
        id: 3,
        ceo: "খালা, লবন ঠিক হয় নাই",
        khala: "কই ছোট মামা, লবন তো ঠিকই আছে। বেশি লবন খাইলে প্রেসার বাড়বো।" // Improvising satirical response for 'Lobar Tik'
    }
];

const CEOWithKhala = () => {
    return (
        <section className="khala-section">
            <div className="khala-header">
                <p className="khala-subtitle">Vision vs Reality</p>
                <h2 className="khala-title">CEO <span>vs</span> Khala</h2>
            </div>

            <div className="chat-container">
                {dialogues.map((item) => (
                    <React.Fragment key={item.id}>
                        {/* CEO's Turn */}
                        <div className="chat-row ceo">
                            <div className="avatar ceo-avatar">CEO</div>
                            <div className="bubble">
                                <span className="speaker-name">Mafikul Alom</span>
                                {item.ceo}
                            </div>
                        </div>

                        {/* Khala's Turn */}
                        <div className="chat-row khala">
                            <div className="avatar khala-avatar">K</div>
                            <div className="bubble">
                                <span className="speaker-name">Khala</span>
                                {item.khala}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default CEOWithKhala;
