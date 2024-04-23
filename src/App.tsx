// import './App.css';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import Login from './components/Login'
// import Body from './components/Body';
// import MuiBar from './components/MuiBar';

// function App() {

//   // const navigate = useNavigate();

//   // useEffect(() => {
//   //   navigate('/');
//   // }, []); 

//   return (
//     <div>
//     {/* <Login /> */}
//     {/* <MuiBar /> */}
//     <Body />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./state/action-creator/index";
import Login from "./components/Login";
import Body from "./components/Body";
import { Route, Routes } from "react-router";
import Contract from "./components/Contract";

const App: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  // const handleLogin = () => {
  //   dispatch(login("yukta", "examplePassword"));
  // };

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <div>
        
      {user.isLoggedIn ? (
        <div>
          {/* <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button> */}
          <Body/>
        </div>
      ) : (
        <div>
          {/* <p>Please log in</p>
          <button onClick={handleLogin}>Login</button> */}
        
          <Login/>
        </div>
      )}
      {/* <Login
      //  LoginPage={handleLogin}--
       /> */}
       {/* <Body/> */}
    </div>
  );
};

export default App;