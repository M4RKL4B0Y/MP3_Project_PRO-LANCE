import React, { useState } from "react";
// import { auth } from "../Config";
// import { createLogin } from "/auth";

export default function Prolancer() {
  const [company, setCompany] = useState({});
  const [companyinfo, setCompanyInfo] = useState([]);
  const [contact, setContact] = useState({});
  const [contactinfo, setContactInfo] = useState([]);
  const [bio, setBio] = useState({});
  const [bioinfo, setBioInfo] = useState([]);
  const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Redirect or do something after successful signup
      } catch (err) {
        setError(err.message);
      }
    };
  };
  function handleSubmit(e) {
    e.preventDefault();
    setCompanyInfo(
      [company, ...companyinfo],
      [contact, ...contactinfo],
      [bio, ...bioinfo]
    );
    console.log(companyinfo);
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Pro-Lancer Sign-Up</h1>

        <h2>Company</h2>

        <div className="company">
          <div>
            <input
              onChange={(e) => setCompanyInfo(e.target.value)}
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setCompanyInfo(e.target.value)}
              type="text"
              placeholder="Trade Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setCompanyInfo(e.target.value)}
              type="text"
              placeholder="Recent Projects"
            />
          </div>
          <div>
            <input
              onChange={(e) => setCompanyInfo(e.target.value)}
              type="text"
              placeholder="Rate"
            />
          </div>
        </div>

        <h2>Contact</h2>

        <div className="contact">
          <div>
            <input name="firstname" type="text" placeholder="First Name" />
          </div>
          <div>
            <input name="lastname" type="text" placeholder="Last Name" />
          </div>
          <div>
            <input name="phone" type="text" placeholder="Phone" />
          </div>
          <div>
            <input name="email" type="email" placeholder="Email" />
          </div>
        </div>
        <div className="address">
          <div>
            <input name="address" type="text" placeholder="Address" />
          </div>
          <div>
            <input name="city" type="text" placeholder="City" />
          </div>
          <div>
            <input name="state" type="text" placeholder="State" />
          </div>
          <div>
            <input name="zip" type="text" placeholder="Zip" />
          </div>
          <div>
            <input name="country" type="text" placeholder="Country" />
          </div>
        </div>

        <h2>Bio</h2>

        <div className="bio">
          <div>
            <textarea name="bio" placeholder="Bio"></textarea>
          </div>
          <div>
            <textarea name="skills" placeholder="Skills"></textarea>
          </div>
        </div>

        <h2>Sign Up</h2>

        <div className="credentials">
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          {/* <div>
            <input
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div> */}
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}
