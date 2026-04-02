import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, ArrowRight } from 'lucide-react';

const attorneys = [
  {
    name: "Dr. Silas Mutua",
    role: "Senior Partner, Corporate Law",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f21e6f57-3794-443d-a9d3-54d4c3f365ae/attorney-1-81f8d0e4-1775126907095.webp",
    bio: "Over 20 years of experience in Kenyan corporate governance and international mergers."
  },
  {
    name: "Faith Wangari",
    role: "Partner, Real Estate & Conveyancing",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f21e6f57-3794-443d-a9d3-54d4c3f365ae/attorney-2-ba9b1943-1775126907113.webp",
    bio: "Expert in complex land transactions and property development compliance in Nairobi."
  },
  {
    name: "Kevin Omondi",
    role: "Lead Advocate, Dispute Resolution",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f21e6f57-3794-443d-a9d3-54d4c3f365ae/attorney-1-81f8d0e4-1775126907095.webp",
    bio: "Distinguished litigator with a focus on commercial disputes and alternative resolution."
  }
];

const Attorneys = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 uppercase">Our Legal Experts</h2>
            <div className="w-20 h-1.5 bg-primary-gold mb-6" />
            <p className="text-slate-600 text-lg">
              Meet the brilliant minds behind our success. Our attorneys are leaders in their respective fields, 
              dedicated to achieving the best possible outcomes for our clients.
            </p>
          </div>
          <button className="group flex items-center gap-2 font-bold text-primary-blue hover:text-slate-900 transition-colors">
            View All Attorneys <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {attorneys.map((attorney, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5]">
                <img 
                  src={attorney.image} 
                  alt={attorney.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-blue transition-colors">
                      <Globe size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-blue transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{attorney.name}</h3>
              <p className="text-primary-gold font-bold text-sm mb-3 uppercase tracking-wider">{attorney.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{attorney.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;