
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      period: '2024-Present',
      degree: 'PhD',
      institution: 'Texas A&M University',
      field: 'Biomedical Engineering',
      gpa: '4.0/4.0',
      focus: 'Molecular and Computational Biology'
    },
    {
      period: '2020-2024',
      degree: 'B.Tech',
      institution: 'Delhi Technological University',
      field: 'Biotechnology (Minor Computational Biology)',
      gpa: '9.6/10.0',
      achievements: 'Department Rank 1, INSPIRE Fellow'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="card p-6 animate-slide-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-research-100 rounded-full mr-4">
                  <GraduationCap className="text-research-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                  <p className="text-lg font-medium text-gray-700">{edu.institution}</p>
                </div>
              </div>
              
              <div className="ml-12">
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">GPA:</span>
                  <span className="text-research-700 font-semibold">{edu.gpa}</span>
                </div>
                
                <div className="mt-3">
                  <span className="font-medium text-gray-700">Focus:</span>
                  <p className="text-gray-600">{edu.focus}</p>
                </div>
                
                {edu.achievements && (
                  <div className="mt-3">
                    <span className="font-medium text-gray-700">Achievements:</span>
                    <p className="text-gray-600">{edu.achievements}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
