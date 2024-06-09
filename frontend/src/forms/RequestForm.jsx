function Request() {
    return (
        <main>
            <h1>Request</h1>

            <h2>Project Type</h2>

            <div>
                <input name="projecttype" type="text" placeholder="Type of Project" />
            </div>

            <h2>Work Requested</h2>

            <div>
                <textarea name="workrequested" type="text" placeholder="Work Requested" />
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
        </main>
    );
}

export default Request