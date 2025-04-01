
import React from 'react';
import { Microscope, Calendar } from 'lucide-react';

const Research = () => {
  const researchProjects = [
    {
      period: 'Feb 2022 - Sept 2022',
      title: 'Antigenic Peptide Prediction for Lymphoma Vaccine for Indian Population via Immunoinformatics',
      guide: 'Dr. Manish Dwivedi, Assistant Professor (III), P.I.: DST-INSPIRE Project'
    },
    {
      period: 'May 2022 - Aug 2022',
      title: 'Molecular differential selectivity study of inhibitors against CDK12: Insights for Rational Drug Design',
      guide: 'Dr Soumya Rath, Assistant Professor, National Institute of Technology (NITW)'
    },
    {
      period: 'Oct 2021 - Jan 2022',
      title: 'PROTACs (Proteolysis Targeting Chimeras) Ubiquitination: Application in Antimicrobial Resistance',
      guide: 'Dr Tara Chand, Post-Doc., Indian Institute of Technology (IIT) Roorkee & Universitat Rovira i Virgili, Spain'
    }
  ];

  const otherProjects = [
    'BrainBox project was a platform, aiming to raise social awareness of overlooked mental health conditions with an amalgamation of fun, connection and social change. A potent toolbox for facilitating and improving the overall health of the brain, mind and head.',
    'iGEM Delhi University team member, RDT-based production of FHIT-Protein for Non-Small Cell Lung Adenocarcinoma therapy.',
    'Aggregate-Green project was an initiative aiming to solve the management and awareness issues of Indian agriculture sector. Developing a blockchain-based monitoring system that is easily integrated with GIS software and satellite imagery AI-based weather & irrigation.'
  ];

  const conferences = [
    {
      date: 'June 2022',
      title: 'Re-designing of natural proteins-Enzymes for novel applications',
      detail: 'Presenter at the International Conference on Proteomics, Transcriptomics and Molecular Drug Design organized by Delhi University.'
    },
    {
      date: 'May 2022',
      title: 'Prediction of Hepatitis Disease Using Machine Learning Technique',
      detail: 'Research poster presenter at the Science of HBV Cure 2022 focusing on the Science of Hepatitis B Cure organized by the Singapore Hepatology Conference.',
      link: '#'
    },
    {
      date: 'Feb 2022',
      title: 'Prediction of AMR and antibiotic discovery using Deep Neural Networks',
      detail: 'Research poster presenter at Antimicrobial Chemotherapy Virtual Conference 2022 on Antimicrobial Resistance.',
      link: '#'
    },
    {
      date: 'Dec 2021',
      title: 'A detailed study of the effect of SARS-COV-2 vaccines on HIV patients',
      detail: 'International Seminar on Recent Trends.'
    }
  ];

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Research Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {researchProjects.map((project, index) => (
            <div 
              key={index} 
              className="card hover:border-research-200 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-research-100 rounded-full mr-4">
                    <Microscope className="text-research-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  </div>
                </div>
                
                <div className="ml-12">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{project.period}</span>
                  </div>
                  
                  <div className="mt-2">
                    <span className="font-medium text-gray-700">Guide:</span>
                    <p className="text-gray-600">{project.guide}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Other Research Initiatives</h3>
          <div className="space-y-4">
            {otherProjects.map((project, index) => (
              <div 
                key={index} 
                className="p-5 bg-white rounded-lg border border-gray-100 shadow-sm animate-fade-in opacity-0"
                style={{ animationDelay: `${0.4 + 0.1 * index}s` }}
              >
                <p className="text-gray-700">{project}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Conferences & Seminars</h3>
          <div className="space-y-5">
            {conferences.map((conf, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row animate-fade-in opacity-0"
                style={{ animationDelay: `${0.7 + 0.1 * index}s` }}
              >
                <div className="md:w-1/6 mb-2 md:mb-0">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-biomed-100 text-biomed-800">
                    {conf.date}
                  </span>
                </div>
                <div className="md:w-5/6">
                  <h4 className="text-lg font-medium text-gray-900">{conf.title}</h4>
                  <p className="text-gray-700 mt-1">{conf.detail}</p>
                  {conf.link && (
                    <a 
                      href={conf.link} 
                      className="inline-block mt-2 text-sm text-research-600 hover:text-research-700"
                    >
                      View Poster →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
