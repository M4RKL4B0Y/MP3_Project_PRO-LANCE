// import React, { useState, useEffect } from "react";
// import "./App.css";
// require('dotenv').config()
import Prolancer from "./forms/ProlancerForm";
import Client from "./forms/ClientForm";
import Project from "./forms/ProjectForm";
import Request from "./forms/RequestForm";
import Invoice from "./forms/InvoiceForm";
import Submit from "./components/Submit";
// import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Client />
      
      {/* <Prolancer /> 
      <Request />
      <Project />
      <Invoice />
      <Submit /> */}

      {/* <Button
           freelancer={freelancer}
        /> */}
    </div>
  );
}

export default App;
