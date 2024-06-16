import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';


function Logout() {
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/login'); // Redirect to login page after logout
  };

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

export default Logout;
