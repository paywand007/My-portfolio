import React,{useState} from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import paywand from '../assets/aa.png'
 
import { Link } from 'react-scroll';

function Navbar() {
  const [nav,setNav]=useState(false)
  const handleClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#00909E]'>
<div>
<img src={paywand} alt=" logo " className='w-[200px]'  />
</div>
 
  <ul className='hidden md:flex justify-start text-white'>
    <li> <Link to='home' smooth={true} duration={500}>
            Home
          </Link></li>
    <li><Link to='about' smooth={true} duration={500}>
            About Me
          </Link></li>
    <li><Link to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
          <li><Link to='work' smooth={true} duration={500}>
         Projects
          </Link></li>
    <li><Link to='contact' smooth={true} duration={500}>
            Contact Us
          </Link></li>
  </ul>
 
{/* Hmbrger */}
        <div onClick={handleClick} className='md:hidden  z-10 text-white m-4'>{ !nav ? <FaBars size={30}/>:<FaTimes  size={30}/>}</div>
        {/* mobile menu */}
        <ul className={!nav ?'hidden':' absolute top-0 left-0 w-full h-screen bg-[#00909E] flex flex-col justify-center items-center text-white'}>
    <li className='py-6 text-4xl' >
      <Link to='home' onClick={handleClick}  smooth={true} duration={500}>
            Home
          </Link></li>
    <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About Me
          </Link></li>
    <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
    <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>
         Projects
          </Link></li>
    <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact Us
          </Link></li>
  </ul>
{/* social icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#07689F] rounded' >
    <a className='flex justify-between w-full  text-white text-center font-semibold' href='https://www.linkedin.com/in/paywand-mohammed-b306581a4/'> LinkedIn <FaLinkedin color='white' size={30}/></a>
    </li>
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3f464a] rounded' >
    <a className='flex justify-between w-full  text-white text-center font-semibold'  href='https://github.com/paywand007'> GitHub <FaGithub color='white' size={30}/></a>
    </li>
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:paywandmohammed007@gmail.com '
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#929292] rounded' >
    <a className='flex justify-between w-full  text-white text-center font-semibold'  href='https://www.canva.com/design/DAFVnsRUb2Q/y5XO6K4CrHhYdJ4SBw7g3A/edit?utm_content=DAFVnsRUb2Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' > Resume <BsFillPersonLinesFill color='white' size={30}/></a>
    </li>
    </ul>
</div>
        </div>
  )
}

export default Navbar