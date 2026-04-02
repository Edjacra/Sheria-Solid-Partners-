import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Gavel, Briefcase, Plane, ShieldCheck, Landmark, Zap, Lock, Calculator } from 'lucide-react';

const practiceAreas = [
  {
    title: "Corporate & Commercial",
    description: "Business registration, M&A, contract drafting, and regulatory compliance.",
    icon: Building2,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Conveyancing & Real Estate",
    description: "Property sales, title transfers, leasing, and real estate project finance.",
    icon: Home,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Dispute Resolution",
    description: "Litigation, arbitration, and mediation services for complex disputes.",
    icon: Gavel,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Employment & Labour",
    description: "Contracts, wrongful termination, and Kenyan labour law compliance.",
    icon: Briefcase,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Immigration Law",
    description: "Work permits, residency, and visas for expatriates and foreign investors.",
    icon: Plane,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Intellectual Property",
    description: "Registering and protecting trademarks, copyrights, and patents.",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Banking & Finance",
    description: "Debt recovery, securitization, and capital markets transactions.",
    icon: Landmark,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "Energy & Infrastructure",
    description: "Renewable energy projects, mining licenses, and PPP advice.",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Data Privacy",
    description: "Compliance with the Kenya Data Protection Act and international standards.",
    icon: Lock,
    color: "bg-slate-50 text-slate-600"
  },
  {
    title: "Tax & Wealth Management",
    description: "Strategic tax planning and estate planning for high-net-worth individuals.",
    icon: Calculator,
    color: "bg-green-50 text-green-600"
  }
];

const PracticeAreas = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Our Expertise</h2>
          <div className="w-20 h-1.5 bg-primary-gold mx-auto mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed">
            We offer comprehensive legal expertise across all key sectors of the Kenyan economy, 
            providing strategic advice and robust representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={`w-14 h-14 ${area.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <area.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-blue transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {area.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm hover:underline">
                LEARN MORE <Landmark size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;