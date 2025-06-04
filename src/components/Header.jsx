

import React from 'react'
import logo from "../assets/netflix_logo.png";
import userProfile from "../assets/user-profile.jpg";
import { getAuth, signOut } from "firebase/auth";
import {auth} from './utils/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ()=>{
   const navigate = useNavigate();
   const user = useSelector((store)=> store.user);
   
   const handleSignOut = ()=>{ 
         const auth = getAuth();
         signOut(auth).then(() => {
           navigate("/");
         })
         .catch((error) => {
          navigate("/error");
        }); 
    }
    return(
        <>
        <div className='flex justify-between absolute w-full px-16 py-4 bg-gradient-to-b from-black'>
           <img className='w-34 cursor-pointer' src={logo}/>

          {user && (<div className='flex gap-4'>
            <img className='w-12 h-auto rounded cursor-pointer' src={userProfile} alt="" />
            <button className='cursor-pointer bg-red-500 text-white px-4 rounded' onClick={handleSignOut}>Sign Out</button>
           </div>)}


           </div>
        </>
    );
};
export default Header;
