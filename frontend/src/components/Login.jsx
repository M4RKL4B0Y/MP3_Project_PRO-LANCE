import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Route, Routes } from 'react-router-dom';
import Projects from './Projects';
import Tasks from './Tasks';
import Comments from './Comments';
import RequestForm from '../forms/RequestForm';
import './dashboard/Dashboard.css';

function Dashboard() {
  return (
    <main>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">PROLANCE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
                <Nav.Link as={Link} to="/comments">Comments</Nav.Link>
                <Nav.Link as={Link} to="/newRequest">New Request</Nav.Link>
                <Nav.Link as={Link} to="/account">Account</Nav.Link>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
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
          Discover professionals in your area for your projects, tasks or errands.
        </p>
        <hr className="my-4" />
        <p>
          Are you a professional yourself? Find work as a freelancer for projects in your area.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>

      <div className="content">
        <Routes>
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="comments" element={<Comments />} />
          <Route path="newRequest" element={<RequestForm />} />
        </Routes>
      </div>
    </main>
  );
}

export default Dashboard;
