
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Publications from '../components/Publications';
import Research from '../components/Research';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Rashi Sharma - Biomedical Research Portfolio";
    
    // Smooth scroll to sections when clicking on navigation links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Publications />
      <Research />
      <Achievements />
      <Footer />
    </div>
  );
};

export default Index;
