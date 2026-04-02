import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Clock } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f21e6f57-3794-443d-a9d3-54d4c3f365ae/corporate-law-bg-3e3418fa-1775126907186.webp" 
                alt="Sheria Solid Partners Boardroom"
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-gold rounded-full opacity-10 blur-3xl" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-blue rounded-full opacity-10 blur-3xl" />
            
            <div className="absolute bottom-10 right-10 bg-white p-8 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-4xl font-bold text-slate-900">LSK</p>
                  <p className="text-sm font-semibold text-slate-500">Certified Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-primary-gold font-bold tracking-widest uppercase mb-4">About Sheria Solid Partners</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Defending Your Rights, <br/>
                <span className="text-primary-blue">Securing Your Future.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Founded on the principles of integrity, excellence, and dedication, Sheria Solid Partners has grown to become one of Kenya's most respected legal practices. We understand that legal challenges can be daunting, which is why we offer personalized attention and strategic solutions to every client.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700">
                    <Users size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Expert Team</h5>
                    <p className="text-sm text-slate-500">Multidisciplinary legal professionals with deep local knowledge.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Strategic Advice</h5>
                    <p className="text-sm text-slate-500">Proactive legal planning to mitigate risks before they arise.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2">
                  <Clock size={20} /> Est. 2014
                </div>
                <button className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-xl font-bold hover:bg-primary-blue hover:text-white transition-all">
                  Meet Our Partners
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;