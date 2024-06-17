import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navbar, Container, Nav } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      login();
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <main>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <h1>PROLANCE</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>

                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>

                <form className="form-inline my-2 my-lg-0"></form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;

// import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link, Route, Routes } from 'react-router-dom';
// import Projects from './Projects';
// import Tasks from './Tasks';
// import Comments from './Comments';
// import RequestForm from '../forms/RequestForm';
// import './Dashboard.css';
// import Form from 'react-bootstrap/Form';

// function Login() {
//   return (
//     <main>
//       <div>
//         <Navbar expand="lg" className="bg-body-tertiary">
//           <Container>
//             <Navbar.Brand as={Link} to="/">PROLANCE</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="ms-auto">
//                 <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
//                 <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
//                 <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
//                 <Nav.Link as={Link} to="/comments">Comments</Nav.Link>
//                 <Nav.Link as={Link} to="/newRequest">New Request</Nav.Link>
//                 <Nav.Link as={Link} to="/account">Account</Nav.Link>
//                 <form className="form-inline my-2 my-lg-0">
//                   <input
//                     className="form-control mr-sm-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                   />
//                   <button
//                     className="btn btn-outline-success my-2 my-sm-0"
//                     type="submit"
//                   >
//                     Search
//                   </button>
//                 </form>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>

//       <h1>Login</h1>
//     <Form>
//       <Form.Group className="mb-3" controlId="formGroupEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formGroupPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//     </Form>
//   );

//       <div className="content">
//         <Routes>
//           <Route path="projects" element={<Projects />} />
//           <Route path="tasks" element={<Tasks />} />
//           <Route path="comments" element={<Comments />} />
//           <Route path="newRequest" element={<RequestForm />} />
//         </Routes>
//       </div>
//     </main>
//   );
// }

// export default Login;
