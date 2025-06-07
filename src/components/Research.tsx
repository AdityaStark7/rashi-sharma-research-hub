
import React from 'react';
import { Microscope, Atom, Brain, Dna, Beaker } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

const Research = () => {
  const researchCards = [
    {
      title: "Molecular Biology",
      color: "#3B82F6",
      hoveredColor: "#1E40AF"
    },
    {
      title: "Bioengineering",
      color: "#10B981",
      hoveredColor: "#047857"
    },
    {
      title: "Neuroscience",
      color: "#8B5CF6",
      hoveredColor: "#6D28D9"
    },
    {
      title: "Genetics",
      color: "#F59E0B",
      hoveredColor: "#D97706"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-research-50 to-research-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-research-800 mb-4">Research Areas</h2>
          <p className="text-lg text-research-600 max-w-3xl mx-auto">
            Exploring the frontiers of biomedical science through interdisciplinary research
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-research-800 mb-6">Current Focus Areas</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-research-100 p-3 rounded-lg">
                  <Microscope className="w-6 h-6 text-research-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-research-800 mb-2">Molecular Mechanisms</h4>
                  <p className="text-research-600">
                    Investigating cellular pathways and molecular interactions in disease progression
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-research-100 p-3 rounded-lg">
                  <Atom className="w-6 h-6 text-research-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-research-800 mb-2">Biomedical Engineering</h4>
                  <p className="text-research-600">
                    Developing innovative solutions for medical diagnosis and treatment
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-research-100 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-research-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-research-800 mb-2">Neurological Disorders</h4>
                  <p className="text-research-600">
                    Understanding brain function and developing therapeutic interventions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-research-100 p-3 rounded-lg">
                  <Dna className="w-6 h-6 text-research-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-research-800 mb-2">Genetic Research</h4>
                  <p className="text-research-600">
                    Exploring genetic factors in disease susceptibility and treatment response
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ThreeDCard cards={researchCards} />
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-research-600 mb-4">
            <Beaker className="w-5 h-5" />
            <span className="text-sm font-medium">Lab Techniques & Methods</span>
          </div>
          <p className="text-research-600 max-w-2xl mx-auto">
            Utilizing cutting-edge laboratory techniques including CRISPR, advanced imaging, 
            and computational biology to advance our understanding of human health and disease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
