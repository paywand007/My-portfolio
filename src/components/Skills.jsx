import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwindcss.png';
import jest from'../assets/testing-logo.png'
import test from'../assets/testingg.png'
import redux from '../assets/redx.png'
import recoded from '../assets/recoded.png'
import next from '../assets/nextjs.png'
import uni from '../assets/salahadin.png'
import sanity from '../assets/Sanity.png'
const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#00909E] text-gray-300'>
        
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
      <div className='mt-[200px] md:mt-9 sm:md-9'>
              <p className='text-4xl font-bold inline border-b-4 border[#bababa] text-center text-[#FCFFE7] '>Education</p>
              <p className='py-4 text-[#FCFFE7]'>These are the technologies I've worked with</p>
          </div>  
          <div className='w-full grid grid-cols-1 sm:grid-cols-1 gap-4 text-center py-8'>
          <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
        <div className='md:flex justify-between  '>
            <div className='flex justify-between gap-7'><img className='w-[80px] h-20 mx-auto mt-2' src={recoded} alt="HTML icon" /> 
            <div className='flex-col'> <p className='my-4 text-left text-3xl font-bold'>Re:Coded</p>
            <p className='my-4 text-left text-2xl font-semibold'>Frontend Web Developer Bootcamp</p></div></div>
        
           <p className='my-4 mx-4 font-bold text-xl  '>jul-2022 , dec 2022</p></div>
                 <p className='text-left p-2 text-xl'>Online Immersive Bootcamps are highly competitive, with a 5% acceptance rate.</p> 
                 <ul className='text-left'> 
<li className='p-3'> - Front End Web Development: HTML/CSS, JavaScript, React, Redux, Firebase </li>
                    <li className='p-3'> - 5 months of project-based learning + coding, with 400+ hours of curriculum and a simulated client project </li>
               <li className='p-3'>- Working with various design teams to create products across industries. </li>
               <li className='p-3'>- Also we learned about  Time Management, Agile Product Management, Teamwork, and Business Communication</li>
                 </ul>
              </div>  
            
              
</div>  
<div className='w-full grid grid-cols-1 sm:grid-cols-1 gap-4 text-center py-8'>
          <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
        <div className='md:flex  justify-between '>
            <div className='flex justify-between gap-7 sm:flex-col'><img className='w-[80px] h-20 mx-auto mt-2' src={uni} alt="HTML icon" /> 
            <div className='flex-col'> <p className='my-4 text-left text-3xl font-bold'>Slahaddein University</p>
            <p className='my-4 text-left text-2xl font-semibold'>Bachelor's Degree in Computer Science - IT</p></div></div>
        
           <p className='my-4 mx-4 font-bold text-2xl'>sept-2019 , jun-2023</p></div>
                  
              </div>  
            
              
</div>  

      <div className='mt-[200px] md:mt-9 sm:md-9'>
              <p className='text-4xl font-bold inline border-b-4 border[#bababa] text-center text-[#FCFFE7] '>Skills</p>
              <p className='py-4 text-[#FCFFE7]'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={HTML} alt="HTML icon" />
                  <p className='my-4 font-semibold'>HTML</p>
              </div>
              <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 font-semibold'>CSS</p>
              </div>
              <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4 font-semibold'>JAVASCRIPT</p>
              </div>
              <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg}  alt="HTML icon" />
                  <p className='my-4 font-semibold'>REACT</p>
              </div>
              <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={redux} alt="HTML icon" />
                  <p className='my-4 font-semibold'>REDUX</p>
              </div>
              <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
                  <img className='w-20  mx-auto'  src={next} alt="HTML icon" />
                  <p className='my-4 font-semibold'>NEXT.JS</p>
              </div>
              <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
                  <img className='w-20  mx-auto'  src={sanity} alt="HTML icon" />
                  <p className='my-4 font-semibold'>Sanity</p>
              </div>
              <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4 font-semibold'>GITHUB</p>
              </div>
             
              <div className='shadow-sm shadow-[#bababa] hover:scale-110 duration-500'>
                  <img className='w-20 h-25 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4 font-semibold'>TAILWIND</p>
              </div>
              <div className='shadow-sm shadow-[#bababa]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4 font-semibold'>FIREBASE</p>
              </div>
              <div className='shadow-sm shadow-[#bababa]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' color='wihte' src={jest} alt="HTML icon" />
                  <p className='my-4 font-semibold '>JEST</p>
              </div>
              <div className='shadow-sm shadow-[#bababa]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' color='wihte' src={test} alt="HTML icon" />
                  <p className='my-4 font-semibold '>JEST</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;