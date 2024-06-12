export default function Request() {
    // const [project, setProject] = useState({});
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("Form submitted");
    //     alert("Form submitted");
    // }
  return (
    <main>
      <form>
        <h1>Request</h1>

        <h2>Project Type</h2>

        <div>
          <input name="projecttype" type="text" placeholder="Type of Project" />
        </div>

        <h2>Work Requested</h2>

        <div>
          <textarea
            name="workrequested"
            type="text"
            placeholder="Work Requested"
          />
        </div>

        <h2>Duration</h2>

        <div>
          <input name="duration" type="text" placeholder="Duration" />
        </div>

        <h2>Location</h2>

        <div>
          <input name="location" type="text" placeholder="Location" />
        </div>

        <h2>Budget</h2>

        <div>
          <input name="budget" type="text" placeholder="Budget" />
        </div>
        
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

        {/* <button onClick {(e)=>handleSubmit(e)} >Submit</button> */}
      </form>
    </main>
  );
}
