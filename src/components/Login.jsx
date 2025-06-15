import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from './utils/Validate.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInAnonymously } from "firebase/auth";
import {auth} from './utils/Firebase';
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice.js';
import { backgroundBanner } from './utils/constant.js';


const Login = () => {
    const[isSignIn , setSignIn] = useState(true);   
    const [errMessage, setErrMessage] = useState(null);
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
          alert('Sign In Success')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }

}

// Login As Guest Function
const handleGuestLogin = () => {
  signInAnonymously(auth)
    .then((userCredential) => {
      const user = userCredential.user;

      dispatch(
        addUser({
          uid: user.uid,
          email: "guest@netflixgpt.com",
          displayName: "Guest User",
        })
      );

      // Store login time
      localStorage.setItem("guestLoginTime", Date.now());

      // Auto-delete after 1 hour
      setTimeout(() => {
        if (auth.currentUser && auth.currentUser.isAnonymous) {
          auth.currentUser.delete()
            .then(() => {
              dispatch(removeUser());
              alert("Guest session expired. User deleted.");
              window.location.reload(); // or redirect
            })
            .catch((error) => {
              console.error("Failed to delete guest user:", error);
            });
        }
      }, 60 * 60 * 1000); // 1 hour
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMessage(errorCode + " - " + errorMessage);
    });
    alert('your Guest Account will be auto delete in 1 Hour')
};

  // ======================= JSX Start Here =================== 
  return (
    <div className='relative'>
        <Header></Header>
        
{/* Background Image */}
        <div className='w-full'>
            <img className='h-screen w-full object-cover' src={backgroundBanner} alt="" />
        </div>
     <marquee className="absolute z-100 top-[12%] bg-blue-300 p-2 md:mx-8 lg:mx-24 rounded-full font-light text-xl" direction="left">
       Jio Users! Please use VPN after login as TMDB's API is blocked by JIO 😥 </marquee>
      {/* Sign In Form */}
       <div className='md:px-12 px-6 py-20  bg-black opacity-70 flex flex-col md:mx-auto absolute top-[60%] left-[50%] min-w-[80%] md:min-w-[400px] md:w-6/12 lg:w-4/12
        translate-x-[-50%] translate-y-[-50%] rounded-2xl'>

        <form onSubmit={(e)=>e.preventDefault()}  className=''>         
          <h2 className='text-white font-semibold text-4xl mb-3'>{isSignIn? 
          "Sign In": "Sign Up"}</h2>

         {/*================ Login As Guest ==============  */}
         <button onClick={handleGuestLogin}  className="cursor-pointer p-2 my-2.5 bg-white rounded border-none w-full">
          Login as Guest</button>

         {!isSignIn && (
          <input   
          ref={name} 
          type="text" placeholder='Your Name' className='p-3 my-2 rounded bg-white border-[0.5px] 
         border-white w-full'/>
         )}   

          <input
          ref={email}
           id='email' type="text" placeholder='Email Address' className='p-3  my-2 rounded  border-[0.5px]  w-full bg-white' />
         
          <input
          ref={password}
           id='password' type="password" className='p-3 my-2 rounded bg-white border-[0.5px] border-white w-full' placeholder='Enter Password' />

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