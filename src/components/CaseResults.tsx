import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: "James Kiptoo",
    company: "Sema Tech Solutions",
    text: "Sheria Solid Partners handled our Series A funding with absolute precision. Their understanding of the Kenyan tech regulatory landscape is unmatched.",
    rating: 5
  },
  {
    name: "Amina Abdullahi",
    company: "Real Estate Developer",
    text: "The conveyancing team is incredibly efficient. They managed a 50-unit title transfer process without a single hitch. Highly recommend for property matters.",
    rating: 5
  },
  {
    name: "David Ochieng",
    company: "Private Client",
    text: "During a difficult employment dispute, Faith and her team provided not just legal expertise, but genuine support and clear communication.",
    rating: 5
  }
];

const CaseResults = () => {
  return (
    <section className="py-24 bg-primary-blue text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold opacity-5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Success Stories</h2>
          <div className="w-20 h-1.5 bg-primary-gold mx-auto mb-6" />
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our results speak for themselves. We take pride in delivering excellence for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-primary-gold/20" size={60} />
              <div className="flex gap-1 mb-6 text-primary-gold">
                {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg leading-relaxed mb-8 italic text-slate-200">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-white text-lg">{t.name}</h4>
                <p className="text-primary-gold font-medium text-sm">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Cases Won", value: "1,200+" },
              { label: "Corporate Clients", value: "450+" },
              { label: "Property Valued", value: "KSh 15B+" },
              { label: "Expert Advocates", value: "15" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</p>
                <p className="text-primary-gold font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseResults;