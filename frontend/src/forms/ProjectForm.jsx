function Project() {
  return (
    <main>
      <h1>Project Profile</h1>

      <h2>Project Type</h2>

      <div>
        <input name="projecttype" type="text" placeholder="Type of Project" />
      </div>

      <h2>Duration</h2>

      <div>
        <input name="duration" type="text" placeholder="Duration" />
      </div>

      <h2>Location</h2>

      <div>
        <input name="location" type="text" placeholder="Location" />
      </div>

      <h2>Client</h2>

      <div>
        <input name="client" type="text" placeholder="Client" />
      </div>

      <h2>Budget</h2>

      <div>
        <input name="budget" type="text" placeholder="Budget" />
      </div>
      <h2>Company</h2>

      <div>
        <input name="company" type="text" placeholder="Company" />
      </div>

      <h2>Rate</h2>

      <div>
        <input name="rate" type="text" placeholder="Rate" />
      </div>

      <h2>Scope of Work</h2>

      <div>
        <textarea
          name="workscope"
          type="textfeild"
          placeholder="Scope of Work"
        />
      </div>
    </main>
  );
}

export default Project;
