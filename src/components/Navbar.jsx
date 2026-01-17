import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-base-charcoal border-b border-white/10 px-6 py-4">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                <div className="font-oswald text-xl font-bold uppercase tracking-widest text-base-white">
                    Alom <span className="text-brand-orange">& Industry</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-base-off-white/70 uppercase tracking-wider">
                    <a href="#" className="hover:text-brand-orange transition-colors">Home</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">Bani</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">Mess Life</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">Vision</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
