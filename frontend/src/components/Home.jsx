import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
// import Dashboard from './components/Dashboard';
import Login from "./Login";
// import Register from './forms/RequestForm';
import NewProfile from "../forms/ProfileForm";
// import ClientPage from './users/client';
import "../App.css";
// import Task from './components/Tasks';
// import Projects from './components/Projects';
// import Comments from './components/Comments';

function Home() {
  return (
    <div>
      <main className="container mt-5">
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <h1>PROLANCE</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">

                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>

                  <form className="form-inline my-2 my-lg-0"></form>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="jumbotron">
          <h1 className="display">Welcome to PROLANCE</h1>
          <h2 className="display"></h2>
          <p className="lead">
            Where you can find professional help or professional work.
          </p>
          <a className="btn btn-primary btn-lg" href="/register" role="button">
            Register
          </a>
        </div>
        <div className="jumbotron">
          <h1 className="display">Alreay a Prolancer?</h1>
          <p className="lead"></p>
          <a className="btn btn-primary btn-lg" href="/login" role="button">
            Login
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;

{
  /* <Route path="/projects-tasks" element={<ProjectsTasks />} />
            <Route path="/my-stuff" element={<MyStuff />} />
            <Route path="/client-page" element={<ClientPage />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/client-form" element={<ClientForm />} />
            <Route path="/invoice-form" element={<InvoiceForm />} />
            <Route path="/project-form" element={<ProjectForm />} />
            <Route path="/prolancer-form" element={<ProlancerForm />} />
            <Route path="/request-form" element={<RequestForm />} /> */
}
