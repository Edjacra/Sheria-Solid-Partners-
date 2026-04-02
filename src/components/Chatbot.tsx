import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import { toast } from 'sonner';

type Message = {
  id: number;
  type: 'bot' | 'user';
  text: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: 'bot', text: "Hello! I'm the Sheria Solid assistant. How can we help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // 0: initial, 1: name, 2: phone, 3: email, 4: message
  const [userData, setUserData] = useState({ name: '', phone: '', email: '', message: '' });
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    
    const currentInput = input;
    setInput('');

    setTimeout(() => {
      let botResponse = "";
      if (step === 0) {
        setUserData(prev => ({ ...prev, name: currentInput }));
        botResponse = `Thanks, ${currentInput}! What is your phone number?`;
        setStep(1);
      } else if (step === 1) {
        setUserData(prev => ({ ...prev, phone: currentInput }));
        botResponse = "Great. Now, what is your email address?";
        setStep(2);
      } else if (step === 2) {
        setUserData(prev => ({ ...prev, email: currentInput }));
        botResponse = "Almost done. Please describe your legal inquiry in a few words.";
        setStep(3);
      } else if (step === 3) {
        setUserData(prev => ({ ...prev, message: currentInput }));
        botResponse = "Thank you! I've submitted your request to our team at mweterie9@gmail.com. Someone will contact you shortly.";
        setStep(4);
        // In a real app, you'd trigger the email here
        toast.info("AI Chatbot submitted inquiry to mweterie9@gmail.com");
      } else {
        botResponse = "Is there anything else I can help with?";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-blue p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Sheria Assistant</h4>
                  <p className="text-[10px] text-blue-100">Online | AI Powered</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.type === 'user' 
                      ? 'bg-primary-blue text-white rounded-br-none' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder={step === 0 ? "Type your name..." : "Type here..."}
                  className="flex-1 text-sm focus:outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button 
                  onClick={handleSend}
                  className="text-primary-blue hover:scale-110 transition-transform"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary-blue text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default Chatbot;