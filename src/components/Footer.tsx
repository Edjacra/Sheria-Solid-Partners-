import React from 'react';
import { Scale, Globe, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed! You will now receive our legal updates.");
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-gold flex items-center justify-center rounded-lg">
                <Scale className="text-slate-950" size={24} />
              </div>
              <span className="text-2xl font-bold text-white uppercase tracking-tighter">Sheria Solid</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing top-tier legal services in Kenya since 2014. Committed to excellence, integrity, and securing our clients' futures.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, Scale].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Practice Areas</h4>
            <ul className="space-y-4">
              {["Corporate Law", "Real Estate", "Dispute Resolution", "Immigration", "Data Privacy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary-gold transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Our Attorneys", "About Us", "Latest News", "Contact Us", "Privacy Policy", "Terms of Use"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary-gold transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Stay Informed</h4>
            <p className="text-slate-400 text-sm mb-6">
              Subscribe to our monthly newsletter for insights into Kenyan legal developments.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-primary-gold text-sm"
              />
              <button className="w-full bg-primary-gold text-slate-950 font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors uppercase text-xs tracking-widest">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Office & Map Placeholder */}
        <div className="border-y border-slate-900 py-10 mb-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <MapPin className="text-primary-gold shrink-0" size={24} />
            <div>
              <p className="text-white font-bold mb-1">Office Location</p>
              <p className="text-sm text-slate-400">Westlands Business Park, Chiromo Lane, Nairobi</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-primary-gold shrink-0" size={24} />
            <div>
              <p className="text-white font-bold mb-1">Direct Line</p>
              <p className="text-sm text-slate-400">+254 740 682 321</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="text-primary-gold shrink-0" size={24} />
            <div>
              <p className="text-white font-bold mb-1">Business Hours</p>
              <p className="text-sm text-slate-400">Mon - Fri: 8 AM - 5:30 PM</p>
            </div>
          </div>
        </div>

        {/* Final Disclaimer & Copyright */}
        <div className="text-center space-y-4">
          <p className="text-[10px] text-slate-500 max-w-4xl mx-auto uppercase tracking-tighter leading-relaxed">
            Legal Disclaimer: The information on this website is for general informational purposes only and does not constitute legal advice. 
            Accessing this site or contacting the firm does not create an attorney-client relationship. 
            Sheria Solid Partners is a registered law firm in Kenya.
          </p>
          <div className="pt-6 text-xs text-slate-500 font-medium">
            &copy; 2026 Sheria Solid Partners. All Rights Reserved. <br/>
            <span className="text-slate-600">Developed by Veloce Tech Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;