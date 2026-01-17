import React from 'react';
import ceoPortrait from '../assets/images/ceo_enhanced.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-base-charcoal overflow-hidden pt-16">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center px-6">
                <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-brand-orange/30 bg-base-charcoal-light shadow-[0_0_50px_rgba(255,107,0,0.2)] mb-8">
                    <img
                        src={ceoPortrait}
                        alt="Mafikul Alom - CEO"
                        className="w-full h-full object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
                    />
                </div>

                <div className="max-w-2xl">
                    <h1 className="font-oswald text-4xl md:text-7xl font-bold uppercase tracking-tight text-base-white mb-2">
                        <span className="block text-brand-orange text-[0.4em] tracking-[10px] mb-2 font-medium">The One & Only</span>
                        Mafikul Alom
                        <small className="block text-base-off-white/40 text-[0.25em] tracking-[4px] mt-2 font-light">Visionary Leader</small>
                    </h1>

                    <div className="inline-block bg-brand-orange text-base-white px-8 py-2 font-oswald text-2xl font-black tracking-[5px] rounded-sm shadow-[0_0_30px_rgba(255,107,0,0.4)] -skew-x-12 my-4">
                        CEO
                    </div>

                    <p className="font-inter text-base md:text-lg text-base-off-white/60 tracking-wider font-light mt-4">
                        Alom Group & Industry (Bachelor Mess)
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-orange animate-bounce text-2xl">
                ↓
            </div>
        </section>
    );
};

export default Hero;
