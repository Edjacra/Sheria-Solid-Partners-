import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Search, ChevronDown, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const practiceAreas = [
  "Corporate & Commercial",
  "Conveyancing & Real Estate",
  "Dispute Resolution",
  "Employment & Labour",
  "Immigration Law",
  "Intellectual Property",
  "Banking & Finance",
  "Energy & Infrastructure",
  "Data Privacy",
  "Tax & Wealth Management"
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary-blue flex items-center justify-center rounded-lg group-hover:bg-primary-gold transition-colors">
              <Scale className="text-white" size={24} />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 block leading-tight">Sheria Solid</span>
              <span className="text-sm font-semibold text-primary-gold block uppercase tracking-wider leading-tight">Partners</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-slate-600 hover:text-primary-blue font-medium transition-colors">Home</a>
            <div 
              className="relative group"
              onMouseEnter={() => setIsPracticeDropdownOpen(true)}
              onMouseLeave={() => setIsPracticeDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-slate-600 hover:text-primary-blue font-medium transition-colors py-4"
              >
                Practice Areas <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {isPracticeDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-xl overflow-hidden border border-slate-100 py-4 grid grid-cols-1"
                  >
                    {practiceAreas.map((area) => (
                      <a 
                        key={area} 
                        href={`#`}
                        className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-blue transition-colors border-l-2 border-transparent hover:border-primary-blue"
                      >
                        {area}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#team" className="text-slate-600 hover:text-primary-blue font-medium transition-colors">Team</a>
            <a href="#about" className="text-slate-600 hover:text-primary-blue font-medium transition-colors">About Us</a>
            <a href="#blog" className="text-slate-600 hover:text-primary-blue font-medium transition-colors">News</a>
            <a href="#contact" className="text-slate-600 hover:text-primary-blue font-medium transition-colors">Contact</a>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+254740682321" className="flex items-center gap-2 text-slate-900 font-bold hover:text-primary-blue transition-colors">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <Phone size={16} className="text-primary-blue" />
              </div>
              <span>+254 740 682 321</span>
            </a>
            <button className="bg-primary-blue hover:bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary-blue/20">
              Schedule a Consultation
            </button>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-600 hover:text-primary-blue p-2"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:+254740682321" className="text-primary-blue">
              <Phone size={24} />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-900"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <a href="#home" className="text-lg font-bold text-slate-900">Home</a>
                <div className="space-y-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Practice Areas</p>
                  <div className="grid grid-cols-1 gap-3 pl-4">
                    {practiceAreas.slice(0, 4).map(area => (
                      <a key={area} href="#" className="text-slate-600 font-medium">{area}</a>
                    ))}
                    <a href="#" className="text-primary-blue font-bold text-sm">View All Areas &rarr;</a>
                  </div>
                </div>
                <a href="#team" className="text-lg font-bold text-slate-900">Attorneys</a>
                <a href="#about" className="text-lg font-bold text-slate-900">About Us</a>
                <a href="#contact" className="text-lg font-bold text-slate-900">Contact Us</a>
              </div>
              <button className="w-full bg-primary-blue text-white py-4 rounded-xl font-bold shadow-lg">
                Schedule a Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-primary-gold"
            >
              <X size={40} />
            </button>
            <div className="w-full max-w-4xl">
              <div className="relative">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search legal services, attorneys, or articles..."
                  className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-4xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary-gold"
                />
                <Search size={32} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30" />
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-white/50">
                <span className="text-sm font-bold uppercase tracking-wider">Trending:</span>
                {["Conveyancing", "M&A", "Employment Law", "Data Protection"].map(tag => (
                  <button key={tag} className="text-sm hover:text-white underline underline-offset-4">{tag}</button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;