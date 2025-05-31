

import React from 'react'
import logo from "../assets/netflix_logo.png";

const Header = ()=>{
    return(
        <>
        <div className='absolute px-16 py-4 bg-gradient-to-b from-black'>
           <img className='w-44' src={logo}/>
           </div>
        </>
    );
};
export default Header;
