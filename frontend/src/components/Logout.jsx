import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  return null;
};

export default Logout;




















// import React, { createContext, useState, useContext} from "react";
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from "../context/AuthContext";

// function Logout() {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <div>
//       <h1>Are you sure you want to logout?</h1>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Logout;

