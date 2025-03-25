import React from 'react';
import { useAuth } from '../Contexts/AuthContext';


const DashBord = () => {

  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn 
  } = useAuth();

  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthUser({name: 'Hanan Ye'});
  }

  const logOut = () => {
    setIsLoggedIn(false);
    setAuthUser(null);
  }

  return (
    <>
    <span>User is currently : {isLoggedIn ? 'Logged In' : 'Logged Out'}.</span><br/>
    {isLoggedIn ? (<span>Welcome {authUser.name}</span>) : null}
    <br/>
    {isLoggedIn ? <button onClick={(e) =>{logOut(e)}}>Log out</button> : <button onClick={(e) =>{logIn(e)}}>Log in</button>}
   
    
      </>
  )
}

export default DashBord