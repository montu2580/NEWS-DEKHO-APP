import React  from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar() {
    
    return (
      <div className="">
        <header className="text-white body-font bg-black shadow-lg fixed z-20 w-[100%]">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
            <Link className="flex title-font font-medium items-center  mb-4 md:mb-0" to="/">
              <strong>
                <span className=" News-Dekho🗞️📰 text-2xl shadow-lg md:mr-auto md:ml-auto md:py-0 text-white" style={{textShadow:"2px 3px 6px red"}}>
                  News-Dekho🗞️📰
                </span>
              </strong>
            </Link>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center text-gray-300">
              <Link className="navItems mr-5 hover:shadow-md  hover:cursor-pointer" to="/">Home</Link>
              <Link className="navItems mr-5 hover:shadow-md  hover:cursor-pointer" to="/business">Business</Link>
              <Link className="navItems mr-5 hover:shadow-md  hover:cursor-pointer" to="/entertainment">Entertainment</Link>                
              <Link className="navItems mr-5 hover:shadow-md  hover:cursor-pointer" to="/general">General</Link>
              <Link className="navItems mr-5 hover:shadow-md  hover:cursor-pointer" to="/health">Health</Link>
              <Link className="navItems mr-5 hover:shadow-md  hover:cursor-pointer" to="/science">Science</Link>
              <Link className="navItems mr-5 hover:shadow-md  hover:cursor-pointer" to="/sports">Sports</Link>
              <Link className="navItems mr-5 hover:shadow-md  hover:cursor-pointer" to="/technology">Technology</Link>
            </nav>
          </div>
        </header>
      </div>
    );
  }




