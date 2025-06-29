import React from 'react';
import myImg from '../../assets/abu-hurayra-syam.jpg';
import { motion } from "framer-motion";

const Biography = () => {
    return (
        <div id='biography' className='mt-25 mb-10'>
            <div className="mb-8">
                <p className="text-neutral text-lg text-center font-extrabold mb-2">BIOGRAPHY</p>
                <p className="text-accent font-bold text-2xl md:text-3xl text-center">Professional Background</p>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row">
                <section className="flex w-full md:w-1/2 justify-center">
                    <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-[250px] md:w-[450px] rounded-xl" src={myImg} alt="Abu Hurayra Syam"/>
                </section>

                <section className="w-full md:w-1/2 justify-center p-5">
                    <p className="text-primary text-lg font-extrabold text-center md:text-start pb-2">About Me</p>
                    <p className="text-neutral flex justify-center md:justify-start text-justify px-1 md:px-0 mb-5">
                        I am a dedicated Full Stack Web Developer specializing in the MERN Stack (MongoDB, Express.js, React, Node.js), committed to building scalable, secure, and efficient web applications. Since starting my programming journey in May 2024, I have continuously enhanced my technical skills, including expertise in Vulnerability Assessment & Penetration Testing (VAPT) with tools like Burp Suite and Acunetix. Currently pursuing a Diploma in Computer Science & Technology at Tangail Polytechnic Institute, I combine strong academic foundations with hands-on experience. Beyond coding, I am passionate about problem-solving, learning new technologies, and personal growth. In my free time, I enjoy reading the Quran, exploring new places, and engaging in hobbies that keep me motivated and balanced.
                    </p>

                    <div className="flex flex-col md:flex-row">
                        <div className="relative group bg-secondary border-l border-primary p-4 flex w-full md:w-1/2 mb-5 md:mr-10 rounded-xl">
                            <p className="relative z-10 text-primary group-hover:text-accent md:w-[250px]">Name<br /><span className="text-accent group-hover:text-secondary">Abu Hurayra Syam</span>
                            </p>
                            <div className="absolute bottom-0 left-0 w-0 h-full bg-primary transition-all duration-300 group-hover:w-full rounded-xl"></div>
                        </div>
                        <div className="relative group bg-secondary border-l border-primary p-4 flex w-full md:w-1/2 mb-5 md:mr-10 rounded-xl">
                            <p className="relative z-10 text-primary group-hover:text-accent md:w-[250px]">Phone No. / WhatsApp<br /><span className="text-accent group-hover:text-secondary">+880 1531-759029</span></p>
                            <div className="absolute bottom-0 left-0 w-0 h-full bg-primary transition-all duration-300 group-hover:w-full rounded-xl"></div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="relative group bg-secondary border-l border-primary p-4 flex w-full md:w-1/2 mb-5 md:mr-10 rounded-xl">
                            <p className="relative z-10 text-primary group-hover:text-accent md:w-[250px]">E-Mail<br /><span className="text-accent group-hover:text-secondary">abuhurayrasyamofficial@gmail.com</span></p>
                            <div className="absolute bottom-0 left-0 w-0 h-full bg-primary transition-all duration-300 group-hover:w-full rounded-xl"></div>
                        </div>
                        <div className="relative group bg-secondary border-l border-primary p-4 flex w-full md:w-1/2 mb-5 md:mr-10 rounded-xl">
                            <p className="relative z-10 text-primary group-hover:text-accent md:w-[250px]">Address <br /><span className="text-accent group-hover:text-secondary">Tangail, Bangladesh - 1980</span></p>
                            <div className="absolute bottom-0 left-0 w-0 h-full bg-primary transition-all duration-300 group-hover:w-full rounded-xl"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Biography;