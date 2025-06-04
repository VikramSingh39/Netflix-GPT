import { useDispatch } from 'react-redux';
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {auth} from './utils/Firebase.js';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from './utils/userSlice.js';


const Body = () => {
  const dispatch = useDispatch(); 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(()=>{
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed 
    const{uid, email, displayName} = user;
     dispatch(addUser(
                    {uid: uid, 
                    email: email, 
                    displayName: displayName}));

    
  } else {
    // User is signed out
    dispatch(removeUser());

  }
});
  },[])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;