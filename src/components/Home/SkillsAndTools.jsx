import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaBootstrap, FaNodeJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa6';
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiTailwindcss, SiPostman, SiBurpsuite } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import acunetixIcon from '../../assets/icons/acunetix.jpg';

const SkillsAndTools = () => {
  return (
    <div id='skills&tools'>
      <div className="mt-25 mb-10">
        <div className="mb-8">
          <p className="text-neutral text-lg text-center font-extrabold mb-2">SKILLS</p>
          <p className="text-accent font-bold text-2xl md:text-3xl text-center">
           Technologies I Work With
          </p>
        </div>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <div className="flex gap-10 md:gap-20 lg:gap-30 items-center">
            <SiJavascript size={40} className="text-[#F7DF1E]" title="JavaScript (ES6+)" />
            <SiTailwindcss size={40} className="text-[#38BDF8]" title="Tailwind CSS" />
            <FaBootstrap size={40} className="text-[#7952B3]" title="Bootstrap" />
            <FaReact size={40} className="text-[#61DAFB]" title="React" />
            <FaNodeJs size={40} className="text-[#339933]" title="Node.js" />
            <SiExpress size={40} className="text-white" title="Express.js" />
            <SiMongodb size={40} className="text-[#47A248]" title="MongoDB" />
            <SiFirebase size={40} className="text-[#FFCA28] mr-10 md:mr-20 lg:mr-30" title="Firebase" />
          </div>
        </Marquee>
      </div>

      <div className="my-10">
        <div className="mb-8">
          <p className="text-neutral text-lg text-center font-extrabold mb-2">TOOLS</p>
          <p className="text-accent font-bold text-2xl md:text-3xl text-center">
            Tools & Platforms I Use
          </p>
        </div>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <div className="flex gap-15 md:gap-25 lg:gap-40 items-center">
            <FaGitAlt size={40} className="text-[#F05032]" title="Git" />
            <FaGithub size={40} className="text-white" title="GitHub" />
            <SiPostman size={40} className="text-[#FF6C37]" title="Postman" />
            <VscVscode size={40} className="text-[#007ACC]" title="VS Code" />
            <SiBurpsuite size={40} className="text-[#E15F1F]" title="Burp Suite" />
            <img
              src={acunetixIcon}
              alt="Acunetix"
              title="Acunetix"
              className="w-10 h-10 object-contain mr-15 md:mr-25 lg:mr-40"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsAndTools;
