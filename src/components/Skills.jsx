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

import next from '../assets/nextjs.png'
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#00909E] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border[#bababa] text-center'>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
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