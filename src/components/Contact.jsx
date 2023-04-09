import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
const form = useRef()

const sendEmail = () => {
  console.log('hey')
  //  e.preventDefault();

  emailjs
    .sendForm(
      'service_21dgncx',
      'template_rvkuj9b',
      form.current,
      '1AkGknP7nUAVl1BD6'
    )
    .then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  form.current.reset()
}
  return (
    <div name='contact' className='w-full h-screen bg-[#00909E] flex justify-center items-center p-4'>
        <form ref={form}
          onSubmit={sendEmail}
         className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8 text-center'>
                <p className='text-4xl text-[#FCFFE7] font-bold inline border-b-4 border-[#bababa]  '>Contact</p>
                <p className='text-[#FCFFE7] py-4'>  Submit the form below or shoot me an email  </p>
            </div>
            <input className='bg-[#FEFBE9] p-2' type="text" placeholder='Name'   name='firstName' />
            <input className='my-4 p-2 bg-[#FEFBE9]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#FEFBE9] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#FCFFE7] font-semibold border-2 hover:text-[#00909E] hover:bg-[#FCFFE7] hover:border-[#bababa] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact