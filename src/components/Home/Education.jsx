import React from 'react';

const Education = () => {
    return (
        <div id='education' className='my-10'>
            <div className="mb-8">
                <p className="text-neutral text-lg text-center font-extrabold mb-2">EDUCATION</p>
                <p className="text-accent font-bold text-2xl md:text-3xl lg:text-4xl text-center">Academic Background</p>
            </div>

            <div className="flex w-full md:w-1/2 p-5 justify-center mx-auto">
            <div className="bg-secondary box-border p-8 rounded-xl w-[500px]">
                <p className="text-[#fafaf9] text-[20px] font-bold pb-3">
                Diploma in Computer Science and Technology
                </p>
                <p className="text-neutral text-[18px]">
                Institute: Tangail Polytechnic Institute <br />
                Session: 2021–2022 <br />
                Duration: 4 Years (Expected Completion: 2026)
                </p>
            </div>
            </div>
        </div>
    );
};

export default Education;