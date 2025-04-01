
import React from 'react';
import { Mail, Linkedin, ExternalLink, MapPin, Phone } from 'lucide-react';
import ThreeDModel from './ThreeDModel';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 pb-16 flex flex-col justify-center relative bg-gradient-to-br from-white via-research-50 to-biomed-50"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 flex-shrink-0">
            <ThreeDModel />
          </div>
          
          <div className="lg:w-1/2">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
                <span className="text-research-700">Rashi Sharma</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
                PhD Student in Biomedical Engineering
              </h2>
            </div>
            
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                Working on characterising non-coding RNA variants and abnormal intronic polyadenylation (IPA)'s contributions to different cancers and their role in tumour development. Bridging sophisticated wet lab techniques with computational methods to translate laboratory innovations into clinical applications.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              <a 
                href="mailto:Rashisharma1901@gmail.com" 
                className="flex items-center text-gray-600 hover:text-research-600 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                <span>Rashisharma1901@gmail.com</span>
              </a>
              
              <a 
                href="tel:+19795742401" 
                className="flex items-center text-gray-600 hover:text-research-600 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                <span>+1 (979)-574-2401</span>
              </a>
              
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2" />
                <span>Bryan, Texas</span>
              </div>
              
              <a 
                href="https://www.linkedin.com/in/rashi-sharma/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-research-600 transition-colors"
              >
                <Linkedin size={18} className="mr-2" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://orcid.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-research-600 transition-colors"
              >
                <ExternalLink size={18} className="mr-2" />
                <span>Orcid</span>
              </a>
              
              <a 
                href="https://scholar.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-research-600 transition-colors"
              >
                <ExternalLink size={18} className="mr-2" />
                <span>Google Scholar</span>
              </a>
              
              <a 
                href="https://www.researchgate.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-research-600 transition-colors"
              >
                <ExternalLink size={18} className="mr-2" />
                <span>ResearchGate</span>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
              <a href="#publications" className="btn-primary">
                View Publications
              </a>
              <a href="#research" className="btn-secondary">
                Research Projects
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
