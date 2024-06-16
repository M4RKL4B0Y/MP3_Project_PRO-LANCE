import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../components/Dashboard";
// import Browse from "../components/browse/Browse";
import Gallery from "../components/gallery/Gallery";

// Your component code here

function ClientPage() {
  return (
    <div>
      <Dashboard />
      
      <Gallery />
      
      {/* <Browse /> */}
    </div>
  );
}

export default ClientPage;
