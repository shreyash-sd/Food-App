import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';




const Random = () => {


  const [random,setRandom] = useState({});

  const fetchData = async() => {

    const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      
    const fetchDetails = data.meals;
    setRandom(fetchDetails);
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  const randomSearch = ()=>{
    return fetchData();
  }  



  return (
    <div className='RandomSearch min-h-screen mt-14 py-5  bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700'>
      <button 
        className='p-5 m-3 bg-yellow-200 text-lg font-semibold rounded-xl md:sticky md:top-24 border-2 border-yellow-200 hover:border-2 hover:border-yellow-500'
        onClick={()=>randomSearch()}
      >
        Show Another
      </button>
      
      <div className='min-w-screen min-h-max md:ml-16 px-4 pb-8 flex flex-col justify-center items-center gap-5'>
        <img src={random[0]?.strMealThumb} alt="Meal picture" className='h-[350px] w-[350px]  rounded-md shadow-lg shadow-black'/>
        
        <h2 className='font-bold text-xl font-serif '>{random[0]?.strMeal}</h2>
        <span className='font-semibold'>Cuisine : <span>{random[0]?.strArea} , {random[0]?.strCategory}</span></span>

        <p className='Ingredients w-[75%] flex flex-wrap gap-5'>
          <span className='font-semibold text-lg font-mono'>Ingredients : </span>
          <span>{ random[0]?.strIngredient1} : { random[0]?.strMeasure1} </span>
          <span>{ random[0]?.strIngredient2} : { random[0]?.strMeasure2} </span>
          <span>{ random[0]?.strIngredient3} : { random[0]?.strMeasure3} </span>
          <span>{ random[0]?.strIngredient4} : { random[0]?.strMeasure4} </span>
          <span>{ random[0]?.strIngredient5} : { random[0]?.strMeasure5} </span>
          <span>{ random[0]?.strIngredient6} : { random[0]?.strMeasure6} </span>
          <span>{ random[0]?.strIngredient7} : { random[0]?.strMeasure7} </span>
          <span>{ random[0]?.strIngredient8}  : {random[0]?.strMeasure8} </span>
          <span>{ random[0]?.strIngredient9} :  {random[0]?.strMeasure9} </span>
          <span>{ random[0]?.strIngredient10} : { random[0]?.strMeasure10} </span>
          <span>{ random[0]?.strIngredient11} : { random[0]?.strMeasure11} </span>
          <span>{ random[0]?.strIngredient12} : { random[0]?.strMeasure12} </span>
          <span>{ random[0]?.strIngredient13} : { random[0]?.strMeasure13} </span>
          <span>{ random[0]?.strIngredient14} : { random[0]?.strMeasure14} </span>
          <span>{ random[0]?.strIngredient15} : { random[0]?.strMeasure15} </span>
          <span>{ random[0]?.strIngredient16} : { random[0]?.strMeasure16} </span>
          <span>{ random[0]?.strIngredient17} : { random[0]?.strMeasure17} </span>
          <span>{ random[0]?.strIngredient18} : { random[0]?.strMeasure18} </span>
          <span>{ random[0]?.strIngredient19} : { random[0]?.strMeasure19} </span>
          <span>{ random[0]?.strIngredient20} : { random[0]?.strMeasure20} </span>
        </p>
        <p className='w-[75%] font-mono leading-8'>
          <span className='font-semibold text-lg '>Instructions : </span>
          {random[0]?.strInstructions}
        </p>

      </div>
     
       
      
    </div>
  )
}

export default Random