import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiExpress } from 'react-icons/si';
import ProjectModal from './ProjectModal';

import tutorNexus01 from '../../assets/projects/tutor-nexus-01.png';
import tutorNexus02 from '../../assets/projects/tutor-nexus-02.png';
import tutorNexus03 from '../../assets/projects/tutor-nexus-03.png';
import tutorNexus04 from '../../assets/projects/tutor-nexus-04.png';

import talentSync01 from '../../assets/projects/talent-sync-01.png';
import talentSync02 from '../../assets/projects/talent-sync-02.png';
import talentSync03 from '../../assets/projects/talent-sync-03.png';
import talentSync04 from '../../assets/projects/talent-sync-04.png';

import subscriptionBox01 from '../../assets/projects/subscription-box-01.png';
import subscriptionBox02 from '../../assets/projects/subscription-box-02.png';
import subscriptionBox03 from '../../assets/projects/subscription-box-03.png';

const projectsData = [
  {
    id: 1,
    name: 'Tutor Nexus',
    images: [tutorNexus01, tutorNexus02, tutorNexus03, tutorNexus04],
    description: 'A platform where students can discover and book tutors across various subjects.',
    detailedDescription:
      'Tutor Nexus is a dynamic web platform that connects tutors with students. It enables tutors to post detailed profiles, including subjects, experience, and availability. Students can browse these profiles, book sessions directly, and leave reviews based on their learning experience. The system is designed to be intuitive, secure, and scalable for both parties.',
    features: [
      'Tutor profile creation and management',
      'Student booking system with session details',
      'Tutor review and rating functionality',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    challenges:
      'Implementing Firebase token verification to secure private APIs and ensure only authenticated users can access or modify sensitive resources.',
    futurePlans:
      'Introduce real-time messaging, tutor availability calendars, payment gateway integration, and smart search filtering with AI-based tutor recommendations.',
    liveLink: 'https://tutor-nexus.web.app/',
    githubClient: 'https://github.com/abuhurayrasyam/tutor-nexus-client',
    githubServer: 'https://github.com/abuhurayrasyam/tutor-nexus-server'
  },
  {
    id: 2,
    name: 'TalentSync Platform',
    images: [talentSync01, talentSync02, talentSync03, talentSync04],
    description: 'A job portal platform connecting talents with recruiters effectively.',
    detailedDescription:
      'TalentSync Platform is an intuitive job portal designed to seamlessly connect job seekers and recruiters. Users can post and manage tasks, apply for jobs, and communicate effectively within a secure environment. The platform focuses on ease of use, scalability, and providing a powerful dashboard to manage tasks and user activities.',
    features: [
      'Task posting and claiming system',
      'User dashboard for managing tasks: add, update, delete, and view personal tasks',
      'Robust authentication and user management using Firebase',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    challenges:
      'Developing a comprehensive and user-friendly dashboard to efficiently manage task lifecycle and ensure secure user authentication.',
    futurePlans:
      'Implement Firebase token verification for API security, integrate animations for better UX, and add third-party payment gateways like Stripe or SSLCOMMERZ for seamless transactions.',
    liveLink: 'https://talentsync-platform.web.app/',
    githubClient: 'https://github.com/abuhurayrasyam/talentsync-platform-client',
    githubServer: 'https://github.com/abuhurayrasyam/talentsync-platform-server',
  },
  {
  id: 3,
  name: 'Subscription Box Platform',
  images: [subscriptionBox01, subscriptionBox02, subscriptionBox03],
  description: 'A subscription-based e-commerce platform for curated product boxes.',
  detailedDescription:
    'The Subscription Box Platform allows users to browse curated subscription boxes and manage their active subscriptions in a personalized dashboard. It provides a seamless experience for subscribing, viewing, and managing recurring orders, designed for scalability and ease of use.',
  features: [
    'Browse and view curated subscription boxes',
    'Manage active subscriptions in "My Subscriptions" page',
    'User-friendly interface with smooth navigation',
  ],
  techStack: ['React', 'Firebase'],
  challenges:
    'Implementing a reliable subscription management system that keeps user data consistent and secure.',
  futurePlans:
    'Integrate Firebase token verification for secure API access and implement real payment gateways to build a fully functional subscription e-commerce experience.',
  liveLink: 'https://subscription-box-platform.web.app/',
  githubClient: 'https://github.com/abuhurayrasyam/subscription-box-platform-client',
}
];

const techIcons = {
  React: <FaReact className="text-[#61DAFB]" title="React" size={24} />,
  'Node.js': <FaNodeJs className="text-[#339933]" title="Node.js" size={24} />,
  Express: <SiExpress className="text-white" title="Express.js" size={24} />,
  MongoDB: <SiMongodb className="text-[#47A248]" title="MongoDB" size={24} />,
  Firebase: <SiFirebase className="text-[#FFCA28]" title="Firebase" size={24} />,
  Git: <FaGitAlt className="text-[#F05032]" title="Git" size={24} />,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects">
      <div className="my-10 w-11/12 mx-auto">
        <div className="mb-8">
          <p className="text-neutral text-lg text-center font-extrabold mb-2">PROJECTS</p>
          <p className="text-accent font-bold text-2xl md:text-3xl lg:text-4xl text-center">Featured Projects Built with the MERN Stack</p>
        </div>

        <div className="flex flex-col gap-10">
          {projectsData.map((project) => (
            <div key={project.id} className="flex flex-col lg:flex-row bg-secondary rounded-xl shadow-lg overflow-hidden">
              <img src={project.images[0]} alt={`${project.name}`} className="w-full h-64 lg:h-auto lg:w-1/2" />
              <div className="p-6 flex flex-col justify-between lg:w-1/2">
                <div>
                  <h3 className="text-primary font-bold text-2xl mb-3">{project.name}</h3>
                  <p className="text-neutral mb-5">{project.description}</p>
                  <ul className="list-disc list-inside mb-5 space-y-1 text-neutral">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.techStack.map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        {techIcons[tech] || <span className="text-neutral">{tech}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center md:place-items-start">
                  <a href={project.liveLink} target="_blank" className="btn-primary flex items-center gap-2 px-5 py-3 rounded-md font-semibold hover:bg-accent hover:text-secondary transition">
                    Live Preview <FaExternalLinkAlt />
                  </a>
                  <a href={project.githubClient} target="_blank" className="btn-secondary flex items-center gap-2 px-5 py-3 rounded-md font-semibold hover:bg-accent hover:text-secondary transition">
                    Client Repo <FaGithub />
                  </a>
                  <button>
                    {project.githubServer && (
                      <a href={project.githubServer} target="_blank" className="btn-secondary flex items-center gap-2 px-5 py-3 rounded-md font-semibold hover:bg-accent hover:text-secondary transition">
                        Server Repo <FaGithub />
                      </a>
                    )}
                  </button>
                  <button onClick={() => setSelectedProject(project)} className="btn-secondary flex items-center gap-2 px-5 py-3 rounded-md font-semibold hover:bg-accent hover:text-secondary transition">
                    Details <FaInfoCircle />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </div>
  );
};

export default Projects;