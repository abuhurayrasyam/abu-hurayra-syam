import React from 'react';
import myImg from '../../assets/abu-hurayra-syam.jpg';

const Biography = () => {
    return (
        <div id='biography' className='my-10'>
            <div className="mb-8">
                <p className="text-neutral text-lg text-center font-extrabold mb-2">BIOGRAPHY</p>
                <p className="text-accent font-bold text-2xl md:text-3xl lg:text-4xl text-center">Professional Background</p>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row">
                <section className="flex w-full md:w-1/2 justify-center">
                    <img className="w-[250px] md:w-[360px] rounded-xl" src={myImg} alt="Abu Hurayra Syam"/>
                </section>

                <section className="w-full md:w-1/2 justify-center p-5">
                    <p className="text-primary text-lg font-extrabold text-center md:text-start pb-2">About Me</p>
                    <p className="text-neutral flex justify-center md:justify-start text-justify px-1 md:px-0 mb-5">
                        I’m a passionate Full Stack Web Developer specialized in the MERN Stack (MongoDB, Express.js, React, Node.js). My core strength is building scalable and secure web applications. I also have hands-on experience with Firebase Authentication, and I’m skilled in Vulnerability Assessment & Penetration Testing (VAPT) using tools like Burp Suite and Acunetix. Currently, I’m pursuing a Diploma in Computer Science & Technology at Tangail Polytechnic Institute.
                    </p>

                    <div className="flex flex-col md:flex-row">
                        <div className="relative group bg-secondary border-l border-primary p-4 flex w-full md:w-1/2 mb-5 md:mr-10 rounded-xl">
                            <p className="relative z-10 text-primary group-hover:text-accent md:w-[250px]">Name<br /><span className="text-accent group-hover:text-secondary">Abu Hurayra Syam</span>
                            </p>
                            <div className="absolute bottom-0 left-0 w-0 h-full bg-primary transition-all duration-300 group-hover:w-full rounded-xl"></div>
                        </div>
                        <div className="relative group bg-secondary border-l border-primary p-4 flex w-full md:w-1/2 mb-5 md:mr-10 rounded-xl">
                            <p className="relative z-10 text-primary group-hover:text-accent md:w-[250px]">Phone No. / WhatsApp / Signal<br /><span className="text-accent group-hover:text-secondary">+880 1531-759029</span></p>
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