import React from 'react'
import {
   
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';
function Footer() {
    
  return (
    <div className='w-full bg-[#00909E]   '>
<hr />
 <ul className='flex justify-center mt-8 md:flex  gap-5'>
    
 <a href='https://www.linkedin.com/in/paywand-mohammed-b306581a4/'>  <FaLinkedin color='#07689F' size={60} /></a> 
   
  <a href='https://github.com/paywand007'> <FaGithub color='#20262E' size={60}/>  </a>
 
           <a href='mailto:paywandmohammed007@gmail.com '> <HiOutlineMail color='#FFB085' size={72} /></a>    
     
 <a href='https://www.canva.com/design/DAFVnsRUb2Q/y5XO6K4CrHhYdJ4SBw7g3A/edit?utm_content=DAFVnsRUb2Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'><BsFillPersonLinesFill color='#73777B' size={60}/></a> 
   
    </ul>

    </div>
  )
}

export default Footer