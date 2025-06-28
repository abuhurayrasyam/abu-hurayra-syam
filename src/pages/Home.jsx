import React from 'react';
import Hero from '../components/Home/Hero';
import Biography from '../components/Home/Biography';
import SkillsAndTools from '../components/Home/SkillsAndTools';
import Education from '../components/Home/Education';
import Certifications from '../components/Home/Certifications';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <Biography></Biography>
            </section>
            <section>
                <SkillsAndTools></SkillsAndTools>
            </section>
            <section>
                <Education></Education>
            </section>
            <section>
                <Certifications></Certifications>
            </section>
        </div>
    );
};

export default Home;