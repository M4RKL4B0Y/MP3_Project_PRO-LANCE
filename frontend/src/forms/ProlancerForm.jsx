import React, { useState } from "react";
// require('dotenv').config();
// const dbase = require('../models');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const confq = require('../config/authConfig');
//  const Prolancer = dbase.user;

export default function Prolancer() {
  const [company, setCompany] = useState({
    companyName: "",
    trade: "",
    recentProjects: "",
    rates: "",
  });
 
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  
  const [bio, setBio] = useState({
    bio: "",
    specialty: "",
  });

  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    confirmpassword: "",
   
  });
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setSignupInfo({
  //     if (_signupInfo.password !== signupInfo.confirmpassword) {
  //       setError("Passwords do not match");
  //       return;
  //     }
  //     try {
  //       await auth.(signupInfo.email, signupInfo.password);
  //       // Handle successful signup
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
      email: "",
      password: "",
      confirmpassword: "",
    
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompany({});
    setContact({});
    setBio({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };
  
  // const Signup = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmpassword, setConfirmpassword] = useState("");
  //   const [error, setError] = useState("");

  //   function handleSignup (e)  {
  //     e.preventDefault();
  //     setEmail("");
  //     e.preventDefault();
  //     setPassword("");
  //     e.preventDefault();
  //     if (password === confirmpassword) {
  //       auth
  //         .createUserWithEmailAndPassword(email, password)  
  //         .then((userCredential) => {
  //           // Signed in
  //           var user = userCredential.user;
  //           // ...
  //         })
  //         .catch((error) => {
  //           var errorCode = error.code;
  //           var errorMessage = error.message;
  //           // ..
  //         });

  //   }
      
      
  //   };
  // };
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setCompanyInfo(
  //     [company, ...companyinfo],
  //     [contact, ...contactinfo],
  //     [bio, ...bioinfo]
  //   );
  //   console.log(companyinfo);
  
  return (
    <main>
        {console.log("Rendering component with state:", { company, contact, bio, signupInfo })}
      <form onSubmit={handleSubmit}>
        <h1>Pro-Lancer Sign-Up</h1>

        <h2>Company</h2>

        <div className="company">
          <div>
            <input
              onChange={(e) => handleChange(e, setCompany)}
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e, setCompany)}
              type="text"
              placeholder="Trade"
            />
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e, setCompany)}
              type="text"
              placeholder="Recent Projects"
            />
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e, setCompany)}
              type="text"
              placeholder="Rate"
            />
          </div>
        </div>

        <h2>Contact</h2>

        <div className="contact">
          <div>
            <input onChange={(e) => handleChange(e, setContact)} 
            type="text" 
            placeholder="First Name" 
            />
          </div>
          <div>
            <input 
            onChange={(e) => handleChange(e, setContact)} 
            type="text" 
            placeholder="Last Name" />
          </div>
          <div>
            <input 
            onChange={(e) => handleChange(e, setContact)} 
            type="text" 
            placeholder="Phone" />
          </div>
          <div>
            <input 
            onChange={(e) => handleChange(e, setContact)} 
            type="email" 
            placeholder="Email" />
          </div>
        </div>
        <div className="address">
          <div>
            <input 
            onChange={(e) => handleChange(e, setContact)} 
            type="text" 
            placeholder="Address" />
          </div>
          <div>
            <input 
            onChange={(e) => handleChange(e, setContact)} 
            type="text" 
            placeholder="City" />
          </div>
          <div>
            <input 
            onChange={(e) => handleChange(e, setContact)} 
            type="text" 
            placeholder="State" />
          </div>
          <div>
            <input 
            onChange={(e) => handleChange(e, setContact)} 
            type="text" 
            placeholder="Zip" />
          </div>
          <div>
            <input 
            onChange={(e) => handleChange(e, setContact)} 
            type="text" 
            placeholder="Country" />
          </div>
        </div>

        <h2>Bio</h2>

        <div className="bio">
          <div>
            <textarea 
            onChange={(e) => handleChange(e, setBio)} 
            placeholder="Bio"></textarea>
          </div>
          <div>
            <textarea 
            onChange={(e) => handleChange(e, setBio)} 
            placeholder="Specialities"></textarea>
          </div>
        </div>

        <h2>Sign Up</h2>

        <div className="signup">
        
          <div on={handleSignup}>
            <input
              onChange={(e) => handleChange(e, setSignupInfo)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
             onChange={(e) => handleChange(e, setSignupInfo)}
              type="password"
              placeholder="Password"
            />
           
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e, setSignupInfo)}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <button onClick={handleSignup}>Sign Up</button>
          {error && <p>{error}</p>}
        </div> 
      
        {/* <div className="submit">
          <button type="submit">Submit</button>
        </div> */}
      </form>
    </main>
  );
}