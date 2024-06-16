import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
      <div className="container-fluid">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
              PROLANCE
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdownLeft"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Menu
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownLeft"
                  >
                    {/* <Link className="dropdown-item" to="/browse">
                      Browse
                    </Link>
                    <Link className="dropdown-item" to="/dashboard">
                      Dashboard
                    </Link>
                    <Link className="dropdown-item" to="/gallery">
                      Gallery
                    </Link> */}
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                    <Link className="dropdown-item" to="/register">
                      Register
                    </Link>
                  </div>
                </li>
              </ul>
              {/* <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdownRight"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Forms
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownRight"
                  >
                    <Link className="dropdown-item" to="/client-form">
                      Client Form
                    </Link>
                    <Link className="dropdown-item" to="/invoice-form">
                      Invoice Form
                    </Link>
                    <Link className="dropdown-item" to="/project-form">
                      Project Form
                    </Link>
                    <Link className="dropdown-item" to="/prolancer-form">
                      Prolancer Form
                    </Link>
                    <Link className="dropdown-item" to="/request-form">
                      Request Form
                    </Link>
                  </div>
                </li>
              </ul> */}
            </div>
          </nav>
        </header>
        <main className="container mt-5">
          
          <div className="jumbotron">
            <h1 className="display">Welcome to PROLANCE</h1>
            <h2 className="display"></h2>
            <p className="lead">
            Where you can find professional help or professional work.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Register
            </a>
            </div>
            <div className="jumbotron">
            <h1 className="display">Alreay a Prolancer?</h1>
            <p className="lead">
              
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Login
            </a>
          </div>
        </main>
      </div>
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
