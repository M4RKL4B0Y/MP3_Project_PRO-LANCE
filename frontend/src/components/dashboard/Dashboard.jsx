import React from "react";
import "./Dashboard.css";


function Dashboard() {
  const Dashboard = () => {
    return (
      <div>
    
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#dasboard">Dashboard</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#hire">Hire</Nav.Link>
                <Nav.Link href="#gallery">Gallery</Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        );
      </div>
    );
  };
}

export default Dashboard;