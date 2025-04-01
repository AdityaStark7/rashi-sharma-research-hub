
import React, { useState } from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publicationsData = [
    {
      date: 'Feb 2024',
      title: 'Evolving Therapeutic Interventions for the Management and Treatment of Alzheimer\'s Disease',
      authors: 'Faizan Ahmad, Anik Karan, Rashi Sharma, et al.',
      journal: 'Ageing Research Reviews, 2024, 102229',
      doi: '10.1016/j.arr.2024.102229',
      link: 'https://doi.org/10.1016/j.arr.2024.102229'
    },
    {
      date: 'Sept 2023',
      title: 'In Vivo Testing of Materials for Medical Applications - testing for toxicity, efficacy, disease diagnosis and disease treatment',
      authors: 'Rashi Sharma, et al.',
      journal: 'Materials for Medical Applications CRC Press',
      doi: '10.1201/9781003317715',
      link: 'https://doi.org/10.1201/9781003317715'
    },
    {
      date: 'June 2023',
      title: 'Mirtazapine as Most Promising Anti-Depressant Drug Targeting MARK4 Inhibitor Involved in Alzheimer\'s Disease',
      authors: 'Arunima Mondal, Rashi Sharma, et al.',
      journal: 'SSRN',
      doi: 'http://dx.doi.org/10.2139/ssrn.4481334',
      link: 'http://dx.doi.org/10.2139/ssrn.4481334'
    },
    {
      date: 'Aug 2023',
      title: 'A Spectrum of Solutions: Unveiling Non-Pharmacological Approaches to Manage Autism Spectrum Disorder',
      authors: 'Arunima Mondal, Rashi Sharma, et al.',
      journal: 'Medicina 2023, 59(9), 1584',
      doi: '10.3390/medicina59091584',
      link: 'https://doi.org/10.3390/medicina59091584'
    },
    {
      date: 'May 2023',
      title: 'Magneto-Electrochemical-based Biosensors Devices for Recognition of Tumour Vesicles from Blood Plasma',
      authors: 'Anusuiya Bora, Rashi Sharma, et al.',
      journal: 'Journal of The Electrochemical Society, 170(5)',
      doi: '10.1149/1945-7111/acd350',
      link: 'https://doi.org/10.1149/1945-7111/acd350'
    },
    {
      date: 'July 2022',
      title: 'Review Analysis of Multidrug Antimicrobial Resistance Facilitation via Bacterial Biofilm Formation',
      authors: 'Rashi Sharma & Saanya Yadav',
      journal: 'VSRD International Journal of Biotechnology and Pharmaceutical Sciences, XI, ISSN: 2278-9197',
      link: '#'
    }
  ];

  const inProgressPublications = [
    'From Crustacean Shells to Kitchen Shelves: The Journey of Chitosan in Food Packaging (under review at the International Journal of Materials Research, Degruyter-Brill)',
    'Exosomes: Emerging Diagnostic Marker for Neurodegenerative Diseases (under review at the Journal of Extracellular Vesicles)',
    'Application of Potential Microbes in Bioremediation (Book chapter submitted at Springer "Wastewater Treatment Innovative Trends")'
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPublications = publicationsData.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Publications</h2>
        
        <div className="mb-8 mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search publications..."
              className="w-full md:w-1/2 p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-research-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div 
              key={index}
              className="publication-card animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start">
                <div className="p-2 bg-research-100 rounded-full mr-4 mt-1">
                  <FileText className="text-research-600" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 md:mb-0">{pub.title}</h3>
                    <span className="text-sm font-medium text-gray-500 md:ml-4 whitespace-nowrap">{pub.date}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-2">{pub.authors}</p>
                  <p className="text-gray-600 italic mb-3">{pub.journal}</p>
                  
                  {pub.doi && (
                    <p className="text-sm text-gray-500 mb-3">
                      <span className="font-medium">DOI:</span> {pub.doi}
                    </p>
                  )}
                  
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-research-600 hover:text-research-700 transition-colors"
                  >
                    <span className="mr-1">View Publication</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Publications in Progress</h3>
          <ul className="space-y-3">
            {inProgressPublications.map((pub, index) => (
              <li 
                key={index} 
                className="text-gray-700 bg-white p-4 rounded-lg border border-gray-100 shadow-sm animate-fade-in opacity-0"
                style={{ animationDelay: `${0.3 + 0.1 * index}s` }}
              >
                {pub}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Publications;
