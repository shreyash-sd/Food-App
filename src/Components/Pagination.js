import React, {useState} from 'react';
import { v4 } from 'uuid';
import {RxArrowDown, RxArrowUp} from 'react-icons/rx';


const Pagination = ({handleClick}) => {

    const [toggle,setToggle] = useState(true);

    const arrayOfBtnText = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return (
    <>
        {
            toggle ? (
            <RxArrowDown className='fixed top-16 left-5 bg-slate-100 p-2 rounded-full font-extrabold text-5xl shadow-inner shadow-black animate-bounce z-20 hover:cursor-pointer'
            onClick={()=> setToggle(!toggle)}/>
            )
            :
            (<RxArrowUp 
                className='fixed top-16 left-5 bg-slate-100 p-2 rounded-full font-extrabold text-5xl shadow-inner shadow-black animate-bounce z-20 hover:cursor-pointer'
                onClick={()=> setToggle(!toggle)}
            />
            )
        }
        <aside 
            className={ (toggle ? "hidden" : "visible") +' flex flex-col gap-4 w-24 h-auto py-10 fixed top-14 bottom-10 bg-gradient-to-tr bg-yellow-200 overflow-y-scroll scrollbar-hide'}
        >
            {
                arrayOfBtnText.map((ele)=>{
                    return(
                        <button 
                            className=" px-4 py-2 mx-2  bg-yellow-100 text-slate-800 font-semibold rounded-full transition-all   border-yellow-200 border-2 hover:border-yellow-600"
                            onClick={(e) => handleClick(e)}
                            key={v4()}
                        >
                            {ele}
                        </button>
                    )
                })
            }
        </aside>
    </>
  )
}

export default Pagination