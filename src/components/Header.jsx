import React from 'react'
import logo from "../assets/netflix_logo.png";
import userProfile from "../assets/user-profile.jpg";
import { getAuth, signOut, onAuthStateChanged  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {auth} from './utils/Firebase.js';
import { useEffect } from 'react';
import { addUser, removeUser } from './utils/userSlice.js';
import { useDispatch } from 'react-redux';

const Header = ()=>{
   const navigate = useNavigate();
   const user = useSelector((store)=> store.user);
   const dispatch = useDispatch();

   const handleSignOut = ()=>{ 
         const auth = getAuth();
         signOut(auth).then(() => {
           navigate("/");
         })
         .catch((error) => {
          navigate("/error");
        }); 
    }

      useEffect(()=>{
  const auth = getAuth();
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed 
    const{uid, email, displayName} = user;
     dispatch(addUser(
            {uid: uid, 
            email: email, 
            displayName: displayName})
            );
            navigate('/browse')   
            }else {
              // User is signed out
              dispatch(removeUser());
              navigate('/');}
  });
//  Unsubscribe when component unmounts
  return()=> unsubscribe();
  },[])


    return(
        <>
        <div className='flex justify-between absolute z-50 w-full px-16 py-4 bg-gradient-to-b from-black'>
           <img className='w-34 cursor-pointer' src={logo}/>

          {user && (<div className='flex gap-4'>
            <img className='w-12 h-auto rounded cursor-pointer' src={userProfile} alt="" />
            <button className='cursor-pointer bg-white text-red-600 px-3 rounded' onClick={handleSignOut}>Sign Out</button>
           </div>)}


           </div>
        </>
    );
};
export default Header;
