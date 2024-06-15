import React from "react";
import "./Dashboard.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Dashboard() {
  return (
    <main>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">PROLANCE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#prolancers">Prolancers</Nav.Link>
                <Nav.Link href="#account">Account</Nav.Link>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="jumbotron">
        <h1 className="display">Hey Kyle</h1>
        <p className="lead">
          Discover professionals in your area for your projects, tasks or
          errands.
        </p>
        <hr className="my-4" />
        <p>
          Are you a professional yourself? Find work as a freelancer for
          projects in your area.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </main>
  );
}

export default Dashboard;
