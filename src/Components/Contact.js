import React from 'react'


const Contact = () => {
  
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-10 pt-5 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700'>
      <a href='' target='_blank'  rel="noopener noreferrer" className='flex gap-5 items-center'>
        <i className="fa-brands fa-linkedin fa-shake fa-2xl" style={{color: "#3a71df"}}></i> 
        <span className='font-mono font-semibold text-lg'>Linkedin</span>
      </a>
      <a href='' target='_blank'  rel="noopener noreferrer" className='flex gap-5 items-center'>
        <i className="fa-brands fa-github fa-shake fa-2xl" style={{color: "#000000"}}></i>
        <span className='font-mono font-semibold text-lg'>Github</span> 
      </a>
      <a href='' target='_blank'  rel="noopener noreferrer" className='flex gap-5 items-center'>
        <i className="fa-brands fa-twitter fa-shake fa-2xl" style={{color: "#2f6eda"}}></i>
        <span className='font-mono font-semibold text-lg'>Twitter</span>  
      </a>
      <a href='' target='_blank'  rel="noopener noreferrer" className='flex gap-5 items-center'>
        <i className="fa-solid fa-circle-user fa-shake fa-2xl" style={{color: "#3DBE29"}}></i>
         <span className='font-mono font-semibold text-lg'>Blogs</span>  
      </a>
    </div>
  )
}

export default Contact