
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      period: 'Jun 2023 - Aug 2023',
      position: 'Research Assistant',
      organization: 'The University of British Columbia, School of Biomedical Engineering',
      department: 'Yachie Lab of Synthetic Biology',
      responsibilities: [
        'Development of new genome editing tools and efficient DNA event recording using engineered stable cell lines and animal models (stem cell & synthetic biology)',
        'Cell lineage tracing of cell progression by testing the evaluation metrics of the macsGESTALT phylogenic tracing model (computational biology)'
      ]
    },
    {
      period: 'Jan 2023 - Mar 2023',
      position: 'Product Research & Design Analyst',
      organization: 'Brainsight AI',
      responsibilities: [
        "Executed sentimental market analysis and research survey for neurological and psychiatric disorder patients and their caregivers' better management used to build 'VoxelBox' Kokoro aided by AI"
      ]
    },
    {
      period: 'Dec 2022 - Feb 2023',
      position: 'Research Assistant',
      organization: 'Indian Institute of Technology (IIT) Guwahati, School of Energy and Engg.',
      responsibilities: [
        'Implemented understanding of biomedical named entity recognition using Natural Language Processing (BioNLP) for sequence-to-sequence approach (deep learning) for document-level relation extraction for database management (Guide: Prof. V.S. Moholkar & Karan Kumar)'
      ]
    },
    {
      period: 'Nov 2022 - Dec 2022',
      position: 'Biosensor Design Engineer',
      organization: 'Indian Institute of Technology (IIT) Delhi, Medic Tech Private Limited',
      responsibilities: [
        'Assisted in the building and cyclic voltammetry optimisation of in-house economical biosensors for heavy metal detection in water samples from rural villages in India'
      ]
    },
    {
      period: 'Jan 2022 - Apr 2022',
      position: 'Research and Development Intern',
      organization: 'Expertise Ventures',
      responsibilities: [
        'Curated research for biotechnology R&D companies based in San Francisco, for their investor funding, analysing datasets involved, statistics and algorithms used'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="mt-12">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="timeline-item animate-slide-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-research-100 text-research-800">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                <span className="md:text-right text-biomed-600 font-medium">
                  {exp.organization}
                </span>
              </div>
              
              {exp.department && (
                <p className="text-gray-700 italic mb-3">{exp.department}</p>
              )}
              
              <ul className="list-disc list-outside text-gray-700 ml-4 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
