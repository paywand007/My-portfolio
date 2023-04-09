import React from 'react'
import {
   
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
    
  } from 'react-icons/fa';
  import { MdOutlineMarkEmailUnread } from 'react-icons/md';
  import { BsFillPersonLinesFill } from 'react-icons/bs';
function Footer() {
    
  return (
    <div className='w-full bg-[#00909E]   '>
<hr />
 <ul className='flex justify-center mt-8 md:flex  gap-5'>
    <li> <a href='https://www.linkedin.com/in/paywand-mohammed-b306581a4/'>  <FaLinkedin color='#0B66C3' size={70} /></a> 
  </li>
 <li> <a href='https://github.com/paywand007'> <FaGithub color='#20262E' size={70}/>  </a>
 </li>
 
     <li className='m'>
           <a href='mailto:paywandmohammed007@gmail.com '> <MdOutlineMarkEmailUnread color='#Ffff' size={70} /></a>    </li>
           <li> 
            <a href='https://www.canva.com/design/DAFVnsRUb2Q/y5XO6K4CrHhYdJ4SBw7g3A/edit?utm_content=DAFVnsRUb2Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>
              <BsFillPersonLinesFill color='#FAEDCD' size={70}/></a> 
 </li>
  
    </ul>

    </div>
  )
}

export default Footer