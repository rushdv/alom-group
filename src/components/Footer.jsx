import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-charcoal border-t border-white/10 py-12 px-6 text-center">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
                <h3 className="font-oswald text-base-white text-2xl uppercase tracking-widest">
                    Alom Group <span className="text-brand-orange">& Industry</span>
                </h3>

                <p className="font-solaiman text-sm text-base-off-white/50 max-w-[600px] leading-relaxed bg-white/5 px-4 py-2 rounded">
                    "এই ওয়েবসাইটটি শুধুমাত্র বিনোদনের উদ্দেশ্যে তৈরি একটি সার্কাজম প্রকল্প।"
                </p>

                <p className="text-[0.7rem] uppercase tracking-widest text-white/30">
                    &copy; {new Date().getFullYear()} Alom Group. All Rights Reserved (In Imagination).
                </p>
            </div>
        </footer>
    );
};

export default Footer;
