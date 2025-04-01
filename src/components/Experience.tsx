
import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, Building, MapPin } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Experience = () => {
  const experienceData = [
    {
      period: 'Jun 2023 - Aug 2023',
      position: 'Research Assistant',
      organization: 'The University of British Columbia, School of Biomedical Engineering',
      department: 'Yachie Lab of Synthetic Biology',
      location: 'Vancouver, Canada',
      responsibilities: [
        'Development of new genome editing tools and efficient DNA event recording using engineered stable cell lines and animal models (stem cell & synthetic biology)',
        'Cell lineage tracing of cell progression by testing the evaluation metrics of the macsGESTALT phylogenic tracing model (computational biology)'
      ],
      tags: ['Synthetic Biology', 'Genome Editing', 'Cell Lines', 'Computational Biology']
    },
    {
      period: 'Jan 2023 - Mar 2023',
      position: 'Product Research & Design Analyst',
      organization: 'Brainsight AI',
      location: 'Delhi, India',
      responsibilities: [
        "Executed sentimental market analysis and research survey for neurological and psychiatric disorder patients and their caregivers' better management used to build 'VoxelBox' Kokoro aided by AI"
      ],
      tags: ['Market Analysis', 'AI', 'Healthcare', 'Product Design']
    },
    {
      period: 'Dec 2022 - Feb 2023',
      position: 'Research Assistant',
      organization: 'Indian Institute of Technology (IIT) Guwahati, School of Energy and Engg.',
      location: 'Guwahati, India',
      responsibilities: [
        'Implemented understanding of biomedical named entity recognition using Natural Language Processing (BioNLP) for sequence-to-sequence approach (deep learning) for document-level relation extraction for database management (Guide: Prof. V.S. Moholkar & Karan Kumar)'
      ],
      tags: ['NLP', 'Deep Learning', 'BioNLP', 'Database Management']
    },
    {
      period: 'Nov 2022 - Dec 2022',
      position: 'Biosensor Design Engineer',
      organization: 'Indian Institute of Technology (IIT) Delhi, Medic Tech Private Limited',
      location: 'Delhi, India',
      responsibilities: [
        'Assisted in the building and cyclic voltammetry optimisation of in-house economical biosensors for heavy metal detection in water samples from rural villages in India'
      ],
      tags: ['Biosensors', 'Voltammetry', 'Heavy Metal Detection', 'Water Analysis']
    },
    {
      period: 'Jan 2022 - Apr 2022',
      position: 'Research and Development Intern',
      organization: 'Expertise Ventures',
      location: 'Remote',
      responsibilities: [
        'Curated research for biotechnology R&D companies based in San Francisco, for their investor funding, analysing datasets involved, statistics and algorithms used'
      ],
      tags: ['Biotechnology', 'R&D', 'Data Analysis', 'Investor Funding']
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems => 
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-research-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block mx-auto">Professional Experience</h2>
          <p className="text-gray-600 mt-4">Building expertise across research and industry</p>
        </div>
        
        <div className="mt-12 space-y-6 max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transform transition-all duration-300 hover:shadow-lg ${
                openItems.includes(index) ? 'border-research-500 ring-1 ring-research-500' : 'border-gray-200'
              }`}
            >
              <Collapsible 
                open={openItems.includes(index)} 
                onOpenChange={() => toggleItem(index)}
                className="w-full"
              >
                <CollapsibleTrigger className="w-full flex flex-col">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-2 p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-research-100 text-research-700">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                        <div className="flex items-center text-biomed-600 font-medium gap-1">
                          <Building size={16} />
                          <span>{exp.organization}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <div className="flex items-center text-gray-600 gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center text-gray-600 gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      )}
                      <div className="text-gray-500 flex items-center gap-1 mt-1">
                        {openItems.includes(index) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        <span className="text-sm">{openItems.includes(index) ? "Less details" : "More details"}</span>
                      </div>
                    </div>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="animate-accordion-down px-5 pb-5 pt-2">
                  {exp.department && (
                    <p className="text-gray-700 italic mb-3">{exp.department}</p>
                  )}
                  
                  <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Responsibilities</h4>
                  <ul className="list-disc list-outside text-gray-700 ml-5 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="bg-biomed-50 text-biomed-700 border-biomed-200 hover:bg-biomed-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
