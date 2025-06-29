import React from 'react';
import { FaCheckCircle, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiGit, SiJavascript, SiTailwindcss, SiRedux } from 'react-icons/si';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const techIcons = {
  React: { icon: <SiReact className="text-[#61DAFB] text-4xl" />, label: 'React' },
  'Node.js': { icon: <SiNodedotjs className="text-[#339933] text-4xl" />, label: 'Node.js' },
  Express: { icon: <SiExpress className="text-gray-300 text-4xl" />, label: 'Express.js' },
  MongoDB: { icon: <SiMongodb className="text-[#47A248] text-4xl" />, label: 'MongoDB' },
  Firebase: { icon: <SiFirebase className="text-[#FFCA28] text-4xl" />, label: 'Firebase' },
  Git: { icon: <SiGit className="text-[#F05032] text-4xl" />, label: 'Git' },
  JavaScript: { icon: <SiJavascript className="text-[#F7DF1E] text-4xl" />, label: 'JavaScript' },
  TailwindCSS: { icon: <SiTailwindcss className="text-[#38BDF8] text-4xl" />, label: 'Tailwind CSS' },
  Redux: { icon: <SiRedux className="text-[#764ABC] text-4xl" />, label: 'Redux' },
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-start overflow-auto z-50 py-12 px-4" onClick={onClose}>
      <div className="bg-secondary rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-accent" aria-label="Close modal">&times;</button>

        <h2 className="text-accent text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 text-center">{project.name}</h2>

        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true} interval={4000} transitionTime={600} swipeable={true} emulateTouch={true} className="mb-10 rounded-lg">
          {project.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`${project.name} screenshot ${index + 1}`} className="rounded-lg max-h-[450px] object-contain mx-auto"/>
            </div>
          ))}
        </Carousel>

        <p className="text-neutral text-justify text-lg mb-8">{project.detailedDescription}</p>

        <div className="mb-10">
          <h3 className="text-primary text-xl md:text-2xl font-bold mb-6">Key Features</h3>
          <ul className="list-none space-y-4 max-w-xl mx-auto md:mx-0">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4 text-neutral text-lg"><FaCheckCircle className="text-neutral text-xl flex-shrink-0" />{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-primary text-xl md:text-2xl font-bold mb-6 text-left">Made With</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-10 max-w-xl mx-auto md:mx-0">
            {project.techStack.map((tech, index) => {
              const techInfo = techIcons[tech];
              return (
                <div key={index} className="flex flex-col items-center text-center text-neutral hover:text-accent transition cursor-default" title={techInfo?.label || tech}>
                  {techInfo ? techInfo.icon : <span className="text-3xl font-semibold">{tech}</span>}
                  <span className="mt-2 text-base font-medium">{techInfo?.label || tech}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-primary text-xl md:text-2xl font-bold mb-4">Development Challenges</h3>
          <p className="text-neutral text-justify text-lg">{project.challenges}</p>
        </div>

        <div className="mb-10">
          <h3 className="text-primary text-xl md:text-2xl font-bold mb-4">Future Enhancements</h3>
          <p className="text-neutral text-justify text-lg">{project.futurePlans}</p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <a href={project.liveLink} target="_blank" className="btn-primary flex items-center gap-3 px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-secondary transition">
            Live Preview <FaExternalLinkAlt />
          </a>
          <a href={project.githubClient} target="_blank" className="btn-secondary flex items-center gap-3 px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-secondary transition">
            Client Repo <FaGithub />
          </a>
          {project.githubServer && (
            <a href={project.githubServer} target="_blank" className="btn-secondary flex items-center gap-3 px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-secondary transition">
              Server Repo <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
