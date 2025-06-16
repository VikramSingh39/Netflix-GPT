import logo from "../assets/netflix_logo.png";
import userProfile from "../assets/user-profile.jpg";
import { getAuth, signOut, onAuthStateChanged  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from './utils/userSlice.js';
import { useDispatch } from 'react-redux';
import { toggleTmdbSearchView} from "./utils/tmdbSlice.js";
import { SupportedLanguages } from "./utils/constant.js";
import { changeLanguage } from "./utils/configSlice.js";


const Header = ()=>{
   const navigate = useNavigate();
   const user = useSelector((store)=> store.user);
   const dispatch = useDispatch();
   const showTmdbSearch = useSelector((store) => store.tmdb.showTmdbSearch)

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
   
  const handleTmdbSearchClick = ()=>{
     dispatch(toggleTmdbSearchView()); 
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

    return(
        <>
        <div className='flex absolute justify-between z-50 w-full px-4 py-4 bg-gradient-to-b from-black flex-col md:flex-row whitespace-nowrap'>
           <img className='w-28 md:w-34 cursor-pointer mx-auto md:mx-0' src={logo} alt="logo"/>
 
          {user && (<div className='flex flex-wrap justify-between  items-center gap-2'>
          


            <button className="p-[2px] md:p-2 bg-white rounded cursor-pointer " onClick={handleTmdbSearchClick}> {showTmdbSearch ? "Go to Home": "Search With TMDB"}</button>
            <img className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded cursor-pointer' src={userProfile} alt="user" />
            <button className='p-[3px] md:p-2 bg-white rounded cursor-pointer' onClick={handleSignOut}>Sign Out</button>
           </div>)}
          {
            showTmdbSearch && <select className="bg-white text-black p-2 m-2 rounded" onChange={handleLanguageChange}>
            {SupportedLanguages.map((lang)=>(
            <option className="bg-white md:p-2 cursor-pointer font-bold" key={lang.identifier} value={lang.identifier}>{lang.name} </option>
            )

            )}
            </select>
          }
           </div>
        </>
    );
};
export default Header;
