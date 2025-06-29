import React from 'react';
import myImg from '../../assets/abu-hurayra-syam.jpg';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import { motion } from "motion/react"

const Hero = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-11/12 mx-auto">
            <section className="w-full md:w-1/2 md:pt-[100px] space-y-4">
                <motion.h1 animate={{color: ['#DAC5A7', '#b8a080'], transition: {duration: 2, repeat: Infinity}}} className="text-2xl md:text-3xl lg:text-5xl font-bold">Hello.</motion.h1>
                <p className="border-l-4 h-[25px] border-accent pl-3 text-accent text-[21px] md:text-[26px] font-semibold flex items-center">I am Abu Hurayra Syam</p>
                <p className="text-primary font-extrabold">Full Stack Web Developer (MERN) | VAPT Specialist</p>
                <p className='text-neutral'>I’m a passionate Full Stack Web Developer specialized in the MERN Stack. My core strength is building scalable and secure web applications.</p>
                <div className='flex gap-3'>
                    <Link to={'https://github.com/abuhurayrasyam'} target="_blank">
                        <FaGithub size={24} />
                    </Link>
                    <Link to={'https://www.linkedin.com/in/abuhurayrasyam'} target="_blank">
                        <FaLinkedin size={24} />
                    </Link>
                    <Link to={'https://x.com/abuhurayrasyam'} target="_blank">
                        <FaXTwitter size={24} />
                    </Link>
                </div>
                <a href="/Resume.pdf" download="Abu_Hurayra_Syam_Resume.pdf">
                    <button className="flex gap-1 items-center bg-secondary text-primary p-3 md:p-5 rounded-xl border-2 border-primary hover:bg-primary hover:text-secondary hover:border-primary cursor-pointer font-semibold">
                        <BsFileEarmarkArrowDown size={20} />
                        <p>Download Resume</p>
                    </button>
                </a>
            </section>
            <section className="flex w-full md:w-1/2 p-10 justify-center items-center pt-[40px] md:pt-15">
                <img className="w-[300px] h-[365px] md:w-[350px] md:h-[400px] rounded-xl" src={myImg} alt="Abu Hurayra Syam"/>
            </section>
        </div>
    );
};

export default Hero;