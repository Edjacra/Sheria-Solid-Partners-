import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import AboutUs from './components/AboutUs';
import Attorneys from './components/Attorneys';
import CaseResults from './components/CaseResults';
import Blog from './components/Blog';
import LeadForm from './components/LeadForm';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
import './styles.css';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary-blue/10 selection:text-primary-blue font-sans antialiased">
      <Toaster position="top-center" expand={true} richColors />
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <AboutUs />
        <CaseResults />
        <Attorneys />
        <Blog />
        <LeadForm />
      </main>
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}

export default App;