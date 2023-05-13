import React from 'react'

const Card = ({details}) => {

  
  return (
    <div className=' w-[300px] h-auto p-5 m-5 flex flex-col gap-2 items-center bg-gradient-to-br from-gray-100 to-gray-300 rounded-md shadow-lg shadow-black	 border-gray-500 border-2'>
      <img 
          src={details.strMealThumb} 
          alt="Food Img" 
          className='rounded-md  m-auto' 
      />
      <h3 className='max-w-fit text-lg text-center text-zinc-700 font-bold'> 
        {details.strMeal} 
      </h3>
      <h4 className='max-w-fit font-semibold text-zinc-500'>
        {details.strArea} 
      </h4>
      <h4  className='max-w-fit font-semibold text-gray-500'> 
        {details.strCategory}
      </h4>
      <p  className='max-w-fit z-0'>
        <a href={details.strYoutube} target="_blank" rel="noopener noreferrer" className='text-blue-800 text-lg font-mono font-bold animate-pulse '> Watch Receipe</a>
      </p>
    </div>
  );
}

export default Card