import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const[isSignIn , setSignIn] = useState(true);
    
    const changeSignInForm = ()=>{
        setSignIn(!isSignIn);
    }
  return (
    <div className='relative'>
        <Header></Header>
{/* Background Image */}
        <div>
            <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg" alt="" />
        </div>

{/* Sign In Form */}
<div className=' px-16 py-20  bg-black  flex flex-col w-4/14 mx-auto absolute top-[50%] left-[50%] 
        translate-x-[-50%] translate-y-[-50%] rounded-2xl'>
        <form  >         
          <h2 className='text-white font-semibold text-4xl mb-3'>{isSignIn? 
          "Sign In": "Sign Up"}</h2>

         {!isSignIn && (<input type="text" placeholder='Full Name' className='p-4 my-2 rounded text-white border-[0.5px] border-white w-full'/>)}   

          <input id='email' type="text" placeholder='Email Address' className='p-4  my-2 rounded text-white border-[0.5px] border-white w-full' />
         
          <input id='password' type="password" className='p-4 my-2 rounded text-white border-[0.5px] border-white w-full' placeholder='Enter Password' />
          
         <button className='cursor-pointer p-2  my-2.5 bg-red-500 text-white
          rounded border-none w-full'>{isSignIn? 
          "Sign In": "Sign Up"}</button>

          
          <p className='text-white mb-2 text-center font-extralight'>OR</p>
          
        </form>

         <h3 className='text-white font-extralight'>{isSignIn? 
          "New to Netflix? ": "Already Registered "} <button className='cursor-pointer font-bold' onClick={changeSignInForm}>
            {isSignIn? 
          " Sign Up Now": " Sign In Now"}</button> </h3>
</div>

    </div>
  )
}

export default Login