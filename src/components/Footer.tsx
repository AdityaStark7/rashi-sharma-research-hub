
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Rashi Sharma</h2>
            <p className="text-gray-300 mb-6">
              PhD Student in Biomedical Engineering at Texas A&M University, specializing in molecular and computational biology research.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:Rashisharma1901@gmail.com" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} className="mr-3" />
                <span>Rashisharma1901@gmail.com</span>
              </a>
              
              <a 
                href="tel:+19795742401" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} className="mr-3" />
                <span>+1 (979)-574-2401</span>
              </a>
              
              <div className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-3" />
                <span>Bryan, Texas</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#publications" className="text-gray-300 hover:text-white transition-colors">Publications</a>
              </li>
              <li>
                <a href="#research" className="text-gray-300 hover:text-white transition-colors">Research</a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.linkedin.com/in/rashi-sharma/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={18} className="mr-2" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://orcid.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>ORCID</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://scholar.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>Google Scholar</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.researchgate.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>ResearchGate</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rashi Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
