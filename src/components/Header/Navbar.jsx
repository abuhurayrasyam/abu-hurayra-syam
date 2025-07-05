import React from 'react';
import logo from '../../assets/logo.png';
import { FaEye } from 'react-icons/fa6';

const Navbar = () => {

    const navLinks = (
        <>
            <a href="#biography" className='btn bg-primary border-none m-2 cursor-pointer text-secondary font-semibold'>Biography</a>
            <a href="#skills&tools" className='btn bg-primary border-none m-2 cursor-pointer text-secondary font-semibold'>Skills & Tools</a>
            <a href="#education" className='btn bg-primary border-none m-2 cursor-pointer text-secondary font-semibold'>Education</a>
            <a href="#certifications" className='btn bg-primary border-none m-2 cursor-pointer text-secondary font-semibold'>Certifications</a>
            <a href="#projects" className='btn bg-primary border-none m-2 cursor-pointer text-secondary font-semibold'>Projects</a>
            <a href="#contact" className='btn bg-primary border-none m-2 cursor-pointer text-secondary font-semibold'>Contact</a>
        </>
    )

    return (
        <div className="bg-primary shadow-sm">
            <div className='navbar w-11/12 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-primary border-none text-secondary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                    </div>
                    <a href="#"><img className='w-8 h-8' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="/Abu-Hurayra-Syam-Resume.pdf" target='_blank' className="btn bg-neutral border-none shadow-md rounded-xl text-secondary flex items-center gap-1">
                        <FaEye />
                        <p>View Resume</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;