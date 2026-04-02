import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Understanding the Kenya Data Protection Act 2024",
    excerpt: "What every business owner needs to know about compliance and client data handling in the current landscape.",
    date: "Oct 12, 2026",
    author: "Silas Mutua",
    category: "Data Privacy",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f21e6f57-3794-443d-a9d3-54d4c3f365ae/legal-services-icon-e206e90f-1775126907465.webp"
  },
  {
    title: "The Future of Renewable Energy Projects in Kenya",
    excerpt: "Navigating public-private partnerships (PPPs) in the green energy sector: Legal hurdles and opportunities.",
    date: "Sep 28, 2026",
    author: "Faith Wangari",
    category: "Energy",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f21e6f57-3794-443d-a9d3-54d4c3f365ae/hero-bg-856be75c-1775126907185.webp"
  },
  {
    title: "Real Estate: Title Deed Conversion Process Simplified",
    excerpt: "A step-by-step guide for landowners on the recent Ministry of Lands title deed conversion directive.",
    date: "Sep 15, 2026",
    author: "Kevin Omondi",
    category: "Real Estate",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f21e6f57-3794-443d-a9d3-54d4c3f365ae/corporate-law-bg-3e3418fa-1775126907186.webp"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Legal Insights</h2>
          <div className="w-20 h-1.5 bg-primary-gold mx-auto mb-6" />
          <p className="text-slate-600 text-lg">
            Stay updated with the latest legal developments and thought leadership from our expert attorneys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary-gold text-slate-900 font-bold px-4 py-1 text-xs uppercase rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 text-slate-400 text-xs mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={14} /> By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-primary-blue hover:text-slate-900 transition-colors">
                  READ ARTICLE <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;