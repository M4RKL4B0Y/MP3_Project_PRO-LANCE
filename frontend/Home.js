import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Browse from '../frontend/src/components/Browse.jsx';
import Login from '../frontend/src/components/Login.jsx';
import Signup from './components/Signup';
import Dashboard from '../frontend/src/components/Dashboard.jsx'
import Submit from '../frontend/src/components/Submit.jsx';
import ClientForm from '../frontend/src/forms/ClientForm.jsx';
import InvoiceForm from '../frontend/src/forms/InvoiceForm.jsx';
import ProjectForm from '../frontend/src/forms/ProjectForm.jsx';
import ProlancerForm from '../frontend/src/forms/ProlancerForm.jsx';
import RequestForm from '../frontend/src/forms/RequestForm.jsx';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">My Webpage</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownLeft" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownLeft">
                    <Link className="dropdown-item" to="/browse">Browse</Link>
                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                    <Link className="dropdown-item" to="/gallery">Gallery</Link>
                    <Link className="dropdown-item" to="/login">Login</Link>
                    <Link className="dropdown-item" to="/submit">Submit</Link>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownRight" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Forms
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownRight">
                    <Link className="dropdown-item" to="/client-form">Client Form</Link>
                    <Link className="dropdown-item" to="/invoice-form">Invoice Form</Link>
                    <Link className="dropdown-item" to="/project-form">Project Form</Link>
                    <Link className="dropdown-item" to="/prolancer-form">Prolancer Form</Link>
                    <Link className="dropdown-item" to="/request-form">Request Form</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="container mt-5">
          <h1 className="mb-4">Freelance Profile</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/projects-tasks" element={<ProjectsTasks />} />
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
            <Route path="/request-form" element={<RequestForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;