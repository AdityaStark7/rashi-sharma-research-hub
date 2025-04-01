
import React from 'react';
import { Microscope, Atom, Brain, Flask, Dna } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

const Research = () => {
  const researchProjects = [
    {
      title: "Characterizing Non-coding RNA Variants in Cancer",
      description: "Investigating the role of non-coding RNA variants in cancer development and progression, with a focus on identifying potential therapeutic targets.",
      icon: <Dna className="w-12 h-12 text-biomed-600" />,
      link: "#"
    },
    {
      title: "Abnormal Intronic Polyadenylation in Tumor Development",
      description: "Analyzing the mechanisms of abnormal intronic polyadenylation and its contribution to tumorigenesis, using both computational and experimental approaches.",
      icon: <Microscope className="w-12 h-12 text-biomed-600" />,
      link: "#"
    },
    {
      title: "Development of New Genome Editing Tools",
      description: "Creating and optimizing innovative genome editing techniques for precise DNA modification, with applications in gene therapy and disease modeling.",
      icon: <Atom className="w-12 h-12 text-biomed-600" />,
      link: "#"
    },
    {
      title: "Cell Lineage Tracing with macsGESTALT",
      description: "Evaluating and enhancing the macsGESTALT phylogenic tracing model for accurate cell lineage reconstruction in developmental biology studies.",
      icon: <Brain className="w-12 h-12 text-biomed-600" />,
      link: "#"
    }
  ];

  const skills = [
    { title: "RNA-seq", color: "#4CAF50", hoveredColor: "#2E7D32" },
    { title: "CRISPR", color: "#2196F3", hoveredColor: "#1565C0" },
    { title: "Python", color: "#9C27B0", hoveredColor: "#6A1B9A" },
    { title: "R", color: "#F44336", hoveredColor: "#C62828" },
    { title: "Bioinformatics", color: "#FF9800", hoveredColor: "#EF6C00" },
    { title: "Cell Culture", color: "#009688", hoveredColor: "#00695C" }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Research Focus</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchProjects.map((project, index) => (
            <div 
              key={index}
              className="card p-6 h-full flex flex-col transition-transform duration-300 hover:scale-[1.02] animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-700 flex-grow">{project.description}</p>
              <a 
                href={project.link} 
                className="mt-4 inline-flex items-center text-biomed-600 hover:text-biomed-800"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Skills</h3>
          <ThreeDCard cards={skills} />
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-research-50 p-4 rounded-lg">
              <h4 className="font-bold text-research-800 mb-2">Laboratory Techniques</h4>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-research-600 rounded-full mr-2"></span>
                  Next-Generation Sequencing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-research-600 rounded-full mr-2"></span>
                  CRISPR/Cas9 Genome Editing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-research-600 rounded-full mr-2"></span>
                  Cell Culture & Tissue Engineering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-research-600 rounded-full mr-2"></span>
                  RNA-seq & ChIP-seq
                </li>
              </ul>
            </div>
            
            <div className="bg-biomed-50 p-4 rounded-lg">
              <h4 className="font-bold text-biomed-800 mb-2">Computational Methods</h4>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-biomed-600 rounded-full mr-2"></span>
                  Bioinformatics Pipeline Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-biomed-600 rounded-full mr-2"></span>
                  Statistical Analysis in R
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-biomed-600 rounded-full mr-2"></span>
                  Machine Learning for Genomics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-biomed-600 rounded-full mr-2"></span>
                  Python for Data Analysis
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Specialized Knowledge</h4>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                  Cancer Genomics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                  RNA Biology & Regulation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                  Translational Medicine
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                  Clinical Biomarker Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
