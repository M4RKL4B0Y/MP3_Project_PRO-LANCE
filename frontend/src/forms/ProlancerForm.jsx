
  function Profile(){
    return (
      <main>
        <h1>Pro-Lancer Profile</h1>

        <h2>Company</h2>

        <div className="company">                  
          <form>
            <input name="companyname"type="text" placeholder="Company Name" />
            <input name="tradename"type="text" placeholder="Trade Name" />
            <input name="recentprojects"type="text" placeholder="Recent Projects" />
            <input name="rate"type="text" placeholder="Rate" />
          </form>
        </div>

        <h2>Contact</h2>

        <div className="contact">
          <form>
           <input name="firstname"type="text" placeholder="First Name" />
           <input name="lastname"type="text" placeholder="Last Name" />
           <input name="phone"type="text" placeholder="Phone" />
           <input name="email"type="email" placeholder="Email" />
          </form>
        </div>

        <h2>Bio</h2>

        <div className="bio">
          <form>
            <textarea name="bio" placeholder="Bio"></textarea>
            <textarea name="skills" placeholder="Skills"></textarea>
          </form>
        </div>

        <h2>Address</h2>

        <div className="address">
           <form>    
            <input name="address"type="text" placeholder="Address" />
            <input name="city"type="text" placeholder="City" />
            <input name="state"type="text" placeholder="State" />
            <input name="zip"type="text" placeholder="Zip" />
            <input name="country"type="text" placeholder="Country" />
          </form>
        </div>

        <h2>Credentials</h2>

        <div className="credentials">
          <form>
              <input name="username"type="text" placeholder="Username" />
              <input name="password"type="password" placeholder="Password" />
              <input name="confirmpassword"type="password" placeholder="Confirm Password" />
          </form>
        </div>

        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      
      </main>
      )
  }

  export default Profile;
