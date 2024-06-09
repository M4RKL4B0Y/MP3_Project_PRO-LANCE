import React from "react";

function Prolancer() {
  return (
    <main>
      <h1>Pro-Lancer Profile</h1>

      <h2>Company</h2>

      <div className="company">
        <form>
          <div>
            <input name="companyname" type="text" placeholder="Company Name" />
          </div>
          <div>
            <input name="tradename" type="text" placeholder="Trade Name" />
          </div>
          <div>
            <input
              name="recentprojects"
              type="text"
              placeholder="Recent Projects"
            />
          </div>
          <div>
            <input name="rate" type="text" placeholder="Rate" />
          </div>
        </form>
      </div>

      <h2>Contact</h2>

      <div className="contact">
        <form>
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
        </form>
      </div>
      <div className="address">
        <form>
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
        </form>
      </div>

      <h2>Bio</h2>

      <div className="bio">
        <form>
          <div>
            <textarea name="bio" placeholder="Bio"></textarea>
          </div>
          <div>
            <textarea name="skills" placeholder="Skills"></textarea>
          </div>
        </form>
      </div>

      <h2>Address</h2>

      <h2>Credentials</h2>

      <div className="credentials">
        <form>
          <div>
            <input name="username" type="text" placeholder="Username" />
          </div>
          <div>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div>
            <input
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </form>
      </div>

      <div className="submit">
        <button type="submit">Submit</button>
      </div>
    </main>
  );
}

export default Prolancer;

// <h2>Scope of Work</h2>

//   <div>
//   <textarea
//     name="workscope"
//     type="textfeild"
//     placeholder="Scope of Work"
//   />
// </div>
