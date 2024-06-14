export default function ClientForm() {
  return (
    <main>
      <h1>Client Profile</h1>

      <h2>Project</h2>

      <div className="project">
        <form>
          <div>
            <input name="project" type="text" placeholder="Project" />
          </div>

          <div>
            <input
              name="projecttype"
              type="text"
              placeholder="Type of Project"
            />
          </div>

          <div>
            <input name="projectduration" type="text" placeholder="Duration" />
          </div>

          <div>
            <input name="location" type="text" placeholder="Location" />
          </div>

          <div>
            <input name="budget" type="text" placeholder="Budget" />
          </div>
        </form>
      </div>
{/* 
      <h2>Scope of Work</h2>

      <div>
        <textarea
          name="workscope"
          type="textfeild"
          placeholder="Scope of Work"
        />
      </div> */}

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

      <h2>Bio</h2>

      <div className="bio">
        <form>
          <div>
            <textarea name="bio" placeholder="Bio"></textarea>
          </div>
        </form>
      </div>

      <h2>Address</h2>

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


