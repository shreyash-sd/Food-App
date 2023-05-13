import { Link } from "react-router-dom";
import { useState } from "react";
import {HiX} from 'react-icons/hi';


const Header = () => {

  const [nav,setNav] = useState(true);



    return (
      <header className="header w-full flex flex-col gap-10 md:flex md:flex-row md:bg-slate-100 bg-opacity-90 bg-slate-50 bg-blend-color-burn md:bg-opacity-100 justify-between p-3 px-10 shadow-lg shadow-[#333] fixed top-0 z-10 ">
        <nav className=" MobileNav flex place-content-between	 items-center ">
          <h3 className="logo font-alkatra  font-bold text-2xl text-fuchsia-600 animate-pulse	">Food Corner</h3>
          
          {
            nav ?
            (
              <i className="fa-solid fa-bars md:hidden text-green-500"  onClick={() => setNav(!nav) }></i>
              
            )
            :
            (
              <HiX 
                className="fa-solid fa-bars md:hidden text-red-600 text-4xl p-2 border-2 border-slate-500 rounded-lg "  
                onClick={() => setNav(!nav) }
              />
            )
          }

        </nav>
        
        <ul className={ ( nav ? "hidden" : "visible") +' navList flex flex-col  items-center gap-5 md:flex md:flex-row md:list-none md:gap-10'}>
              <Link to="/">
                <li className="font-bold text-lg text-blue-500 hover:border-2 border-slate-500 hover:p-2 md:border-none md:hover:p-0">Home</li>
              </Link>
              <Link to="/SearchBox">
                <li className="font-bold text-lg text-blue-500 hover:border-2 border-slate-500 hover:p-2 md:border-none md:hover:p-0">Search By Name</li>
              </Link>
              <Link to="/Random">
                <li className="font-bold text-lg text-blue-500 hover:border-2 border-slate-500 hover:p-2 md:border-none md:hover:p-0">Random Search</li>
              </Link>
              <Link to="/Contact">
                <li className="font-bold text-lg text-blue-500 hover:border-2 border-slate-500 hover:p-2 md:border-none md:hover:p-0">Contact</li>
              </Link>
          </ul>
      </header>
  )};

  export default Header;