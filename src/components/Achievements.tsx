
import React from 'react';
import { Award, Bookmark, Heart } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    'Secured the prestigious MITACS Globalink Research Scholarship and researched gene editing tools for disease therapies.',
    'Millennium Fellowship 2021 under the United Nations Academic Impact for social well-being project leadership and management.',
    'Kalpana: She for STEM Fellow 2022 designed by women STEM professionals to kindle the spirit of innovation and research.',
    'Winner of Jaypee Biothon, International Biotechnology Hackathon organized by Jaypee Institute of Information Technology [JIIT].',
    'Winner of Bio-entrepreneur (BTRA) organized by Netaji Subhas of Technology [NSIT] & Delhi Technological University [DTU].',
    'Secured 2nd Position in Health-Hack 3.0 organized by Delhi Pharmaceutical Sciences and Research University [DPSRU].',
    'Finalist in the Ernst & Young (EY) Scholarship 2021-22.',
    'Winner of Delhi University Research Presentation on Genetically Modified Plants by Kalindi College, DU Botanical Society.'
  ];

  const positions = [
    {
      title: 'Placement Coordinator',
      organization: 'Department of Biotechnology, Training & Placement Cell, Delhi Technological University [DTU]',
      description: 'Administered the placement team for 4500+ students, liaised with 100+ recruiting organisations, and coordinated hiring processes.'
    },
    {
      title: 'Core Team Member',
      organization: 'RSG India, International Society of Computational Biology [ISCB]',
      description: 'Organised student symposiums & research talks.'
    },
    {
      title: 'President',
      organization: 'BioSoc, Society of Department of Biotechnology (DTU)',
      description: 'Organised and managed events, competitions & technical projects.'
    }
  ];

  const volunteering = [
    {
      title: 'Joint Secretary',
      organization: 'Rotaract Club',
      description: 'Participated in voluntary drives for social causes like food hunger, breast cancer, and PCOS awareness.'
    },
    {
      title: 'Volunteer',
      organization: 'National Service Scheme, Govt. of India',
      description: 'Managed public health projects for human blood donation & stray animal welfare.'
    },
    {
      title: 'Volunteer',
      organization: 'Vrikshit Foundation NGO',
      description: 'Volunteered in cleanliness & sanitation drives for rural areas and taught in underprivileged communities.'
    }
  ];

  const certifications = [
    'International Bioinformatic E-workshop organized by Delhi Technological University. (one week)',
    'National Workshop on Statistical Analysis of Biological Data. (five weeks)',
    'International Workshop on Proteomics, Transcriptomics and Molecular Drug Design. (one week)',
    'Computational Biology and Network Pharmacology hands-on workshop by the Department of Biotechnology (DBT), Govt. of India.'
  ];

  const activities = [
    'Senior diploma holder in Indian Classical dancing, Harmonium & Tabla musical instruments. Yoga & meditation practitioner.',
    'Memberships & Contributions to: British Society for Gene & Cell Therapy [BSGCT], European Association for Cancer Research [EACR], British Association for Cancer Research [BACR], British Society for Antimicrobial Chemotherapy [BSAC].'
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Achievements & Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="text-research-600 mr-2" size={20} />
              <span>Awards & Achievements</span>
            </h3>
            
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li 
                  key={index} 
                  className="flex items-start animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <span className="text-research-500 mr-2">•</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Bookmark className="text-biomed-600 mr-2" size={20} />
              <span>Positions of Responsibility</span>
            </h3>
            
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div 
                  key={index} 
                  className="card p-4 animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <h4 className="font-medium text-gray-900">{position.title}</h4>
                  <p className="text-biomed-600 text-sm mb-1">{position.organization}</p>
                  <p className="text-gray-700 text-sm">{position.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-6 flex items-center">
              <Heart className="text-research-600 mr-2" size={20} />
              <span>Volunteering & NGOs</span>
            </h3>
            
            <div className="space-y-4">
              {volunteering.map((volunteer, index) => (
                <div 
                  key={index} 
                  className="card p-4 animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.4 + 0.1 * index}s` }}
                >
                  <h4 className="font-medium text-gray-900">{volunteer.title}</h4>
                  <p className="text-research-600 text-sm mb-1">{volunteer.organization}</p>
                  <p className="text-gray-700 text-sm">{volunteer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Certifications & Trainings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.7 + 0.1 * index}s` }}
              >
                <p className="text-gray-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Co-Curricular Activities</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm animate-fade-in opacity-0"
                style={{ animationDelay: `${1.0 + 0.1 * index}s` }}
              >
                <p className="text-gray-700">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
