import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from './utils/Validate.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice.js';



const Login = () => {
    const[isSignIn , setSignIn] = useState(true);   
    const [errMessage, setErrMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const changeSignInForm = ()=>{
        setSignIn(!isSignIn);
    }

    // Validate Email and Password Strength.
    const handleButtonClick= (e)=>{
      // const nameValue = !isSignIn ? name.current?.value : '';
      const message =  checkValidData(name.current?.value, email.current.value, password.current.value);
      setErrMessage(message);
    
    if(message)return;

   // =========== Sign Up logic ==============
    if(!isSignIn){  
    createUserWithEmailAndPassword(auth, email.current.value, 
      password.current.value)
      .then((userCredential) => {
      const user = userCredential.user;
      // 
      const auth = getAuth();
      updateProfile(user, {
       displayName: name.current.value
        }).then(() => {
        // Profile updated!
            const{uid, email, displayName} = auth.currentUser;
             dispatch(addUser(
                            {uid: uid, 
                            email: email, 
                            displayName: displayName}));
         navigate("/browse");
       }).catch((error) => {
        // An error occurred
        setErrMessage(error.message)
       });
      // 

      alert('You Sign Up Successfully')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; 
    setErrMessage(errorCode+ "-" + errorMessage);
  });
  }else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;  
          navigate("/browse")
          alert('Sign In Success')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }

}

    // Sign In / SignUp.
  return (
    <div className='relative'>
        <Header></Header>
{/* Background Image */}
        <div className='w-full'>
            <img className='h-screen w-full bg-center' src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg" alt="" />
        </div>

{/* Sign In Form */}
<div className=' px-16 py-20  bg-black  flex flex-col w-4/14 mx-auto absolute top-[50%] left-[50%] min-w-[300px] 
        translate-x-[-50%] translate-y-[-50%] rounded-2xl'>
        <form onSubmit={(e)=>e.preventDefault()} >         
          <h2 className='text-white font-semibold text-4xl mb-3'>{isSignIn? 
          "Sign In": "Sign Up"}</h2>

         {!isSignIn && (
          <input   
          ref={name} 
          type="text" placeholder='Your Name' className='p-4 my-2 rounded text-white border-[0.5px] 
         border-white w-full'/>
         )}   

          <input
          ref={email}
           id='email' type="text" placeholder='Email Address' className='p-4  my-2 rounded text-white border-[0.5px] border-white w-full' />
         
          <input
          ref={password}
           id='password' type="password" className='p-4 my-2 rounded text-white border-[0.5px] border-white w-full' placeholder='Enter Password' />

          <p className='text-red-500 rounded p-2 font-light m-1'>{errMessage}</p>

         <button onClick={handleButtonClick} className='cursor-pointer p-2  my-2.5 bg-red-500 text-white
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

export default Login;