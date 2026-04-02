import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f21e6f57-3794-443d-a9d3-54d4c3f365ae/hero-bg-856be75c-1775126907185.webp" 
          alt="Modern Law Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-gold/20 text-primary-gold font-bold text-sm mb-6 border border-primary-gold/30">
              TRUSTED LEGAL PARTNERS IN KENYA
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Helping Small Businesses <br/>
              <span className="text-primary-gold">Navigate Kenyan Law</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              From corporate governance to complex real estate transactions, Sheria Solid Partners provides expert legal solutions tailored to your unique challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                Start Your Consultation <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold transition-all">
                View Practice Areas
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "10+ Years Experience",
                "LSK Accredited",
                "98% Success Rate"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="text-primary-gold" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;