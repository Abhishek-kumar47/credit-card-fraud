import React, { useEffect } from 'react'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import Login from './Login'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Home from './Home';
import InputForm from './InputForm';
import Ftre from './Ftre';
import Dashboard from './Dashboard';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
        {
          path: "/browse",
          element: <Home/>,
      },
      {
          path:"/ftre",
          element: <Ftre/>,
      },
      {
        path: "/inputform",
        element: <InputForm/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
     
      
    ]);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            
            } else {
                dispatch(removeUser());
            }
          });
    }, [])
  return (
    <div >
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
