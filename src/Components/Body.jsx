
import { useState , useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";


import Pagination from "./Pagination";
import Card from './Card';




const Body = () => {

    const [details,setDetails] = useState({});
    const [search,setSearch] = useState("a");

    const fetchData = async() => {

        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
        
        setDetails(data);
        
    }
    
    useEffect(()=>{
        fetchData();
    },[search])

    const handleClick = (e) => {
        setSearch(e.target.innerText);
    }


    return (
        <div className="flex gap-4">
            <Pagination handleClick={handleClick}/>
            <div className="flex flex-wrap gap-6 justify-center items-center pl-10 py-16 mx-auto min-w-full min-h-screen bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700">
                {
                    details.meals?.map((ele)=>{
                       return <Card details={ele} key={v4()}/>
                   })
                }

            </div>

            
            

            
        </div>
    );
}

export default Body