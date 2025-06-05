import logo from "../assets/netflix_logo.png";
import userProfile from "../assets/user-profile.jpg";
import { getAuth, signOut, onAuthStateChanged  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from './utils/userSlice.js';
import { useDispatch } from 'react-redux';
import { toggleGptSearchView} from "./utils/gptSlice.js";
import { SupportedLanguages } from "./utils/constant.js";
import { changeLanguage } from "./utils/configSlice.js";

const Header = ()=>{
   const navigate = useNavigate();
   const user = useSelector((store)=> store.user);
   const dispatch = useDispatch();
   const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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
   
  const handleGptSearchClick = ()=>{
     dispatch(toggleGptSearchView()); 
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

    return(
        <>
        <div className='flex justify-between absolute z-50 w-full px-16 py-4 bg-gradient-to-b from-black'>
           <img className='w-34 cursor-pointer' src={logo}/>

          {user && (<div className='flex items-center gap-4'>
          
          {
            showGptSearch && <select className="bg-white text-black p-2 m-2 rounded" onChange={handleLanguageChange}>
            {SupportedLanguages.map((lang)=>(
            <option className="bg-white text-red-400 cursor-pointer font-bold" key={lang.identifier} value={lang.identifier}>{lang.name} </option>
            )

            )}
            </select>
          }

            <button className="p-2 m-2 bg-white rounded cursor-pointer" onClick={handleGptSearchClick}> {showGptSearch ? "Go to Home": "Search With GPT"}</button>
            <img className='w-[45px] h-[42px] rounded cursor-pointer' src={userProfile} alt="" />
            <button className='cursor-pointer bg-white p-2 m-2 rounded' onClick={handleSignOut}>Sign Out</button>
           </div>)}

           </div>
        </>
    );
};
export default Header;
