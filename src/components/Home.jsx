import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#00909E]'>

<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen'>
        <p className='text-[#fff]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#FCFFE7]'>
     PAYWAND MOHAMMED
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#C4D7E0]'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#FCFFE7] py-4 max-w-[700px] text-lg'>
        I design and develop visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, Reactjs . 
        I specialize in responsive layouts and am skilled in popular frontend frameworks. My solutions are high-quality, performant, and accessible.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FCFFE7] hover:border-[#FCFFE7] hover:text-[#00909E]'>
          <Link to='work' smooth={true} duration={500}>
          View Work
          </Link> 
           <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3 ' /></span>
             
        
          </button>
        </div>
        </div>
    </div>
  )
}

export default Home