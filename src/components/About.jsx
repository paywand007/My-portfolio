import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-[#00909E] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#839B97]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold text-[#FCFFE7]'>
              <p>Hi. I'm Paywand Mohammed, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p  className='text-[#FCFFE7] py-4 max-w-[700px] text-lg'>As a frontend developer, I am passionate about creating beautiful, responsive, and user-friendly websites and applications.
                 I specialize in crafting intuitive and engaging user experiences that prioritize both form and function. With a strong eye for design and a deep understanding of modern frontend technologies, I am dedicated to delivering high-quality, performant, and accessible solutions that meet the needs of users and businesses alike. I am committed to staying up-to-date with the latest trends, best practices, and emerging technologies in the field, and constantly striving to improve my skills and knowledge. As a collaborator and problem-solver,
                 I am dedicated to working with clients and colleagues to deliver exceptional results that exceed expectations.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;