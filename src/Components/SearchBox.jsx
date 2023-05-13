import React, { useState, useEffect } from 'react'
import axios from 'axios';


import Card from './Card';



const SearchBox = () => {

  const [details,setDetails] = useState({});
  const [text, setText] = useState("");


    const fetchData = async() => {

      const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
      setDetails(data);
        
    }
    
    useEffect(()=>{
      fetchData();
    },[text])


  return (
    <div className='SearchPage min-h-screen mt-14 py-5 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700'>
      <div className="h-10 border-2 px-2 mt-5 mx-auto max-w-md bg-yellow-100 rounded-tr-lg rounded-bl-lg border-yellow-600">
        <input 
          className='outline-none h-full w-full bg-yellow-100 placeholder:text-yellow-600 placeholder:font-medium animate-pulse'
          type="text" 
          placeholder="Enter a meal name . . . . . . ."
          id="search" 
          value={text}
          onChange={(e)=> setText(e.target.value)} 
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-14 mb-10 ">
        {
          details.meals?.map((ele)=>{
            return <Card details={ele} key={ele.idMeal}/>
          })
        }
      </div>
  </div>
  )
}

export default SearchBox