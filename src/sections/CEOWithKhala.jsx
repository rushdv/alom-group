import React from 'react';

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
        <section className="bg-base-charcoal py-24 px-6 border-t border-white/5">
            <div className="text-center mb-16">
                <p className="text-brand-orange text-lg font-semibold tracking-[2px] uppercase mb-4 font-inter">Vision vs Reality</p>
                <h2 className="text-base-white text-5xl font-bold uppercase font-oswald">CEO <span className="text-brand-orange">vs</span> Khala</h2>
            </div>

            <div className="max-w-[800px] mx-auto space-y-8 flex flex-col">
                {dialogues.map((item) => (
                    <React.Fragment key={item.id}>
                        {/* CEO's Turn */}
                        <div className="flex flex-row items-end gap-4 self-start max-w-[85%] animate-fadeInOut">
                            <div className="w-12 h-12 rounded-full bg-brand-orange text-base-white flex items-center justify-center font-oswald font-bold text-xs shrink-0 shadow-lg">CEO</div>
                            <div className="bg-base-charcoal-light p-6 rounded-2xl rounded-bl-none border border-white/5 shadow-xl relative">
                                <span className="block text-[0.65rem] uppercase tracking-widest text-brand-orange font-bold mb-2 font-inter">Mafikul Alom</span>
                                <p className="font-solaiman text-lg text-base-off-white leading-relaxed">{item.ceo}</p>
                            </div>
                        </div>

                        {/* Khala's Turn */}
                        <div className="flex flex-row-reverse items-end gap-4 self-end max-w-[85%] animate-fadeInOut">
                            <div className="w-12 h-12 rounded-full bg-base-off-white text-base-charcoal flex items-center justify-center font-oswald font-bold text-xs shrink-0 shadow-lg">K</div>
                            <div className="bg-white p-6 rounded-2xl rounded-br-none shadow-2xl relative">
                                <span className="block text-[0.65rem] uppercase tracking-widest text-base-charcoal font-bold mb-2 font-inter">Khala</span>
                                <p className="font-solaiman text-lg text-base-charcoal leading-relaxed font-medium">{item.khala}</p>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default CEOWithKhala;
