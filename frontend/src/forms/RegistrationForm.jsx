import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../baseURL";
import { Navbar, Container, Nav } from "react-bootstrap";


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role_id: "client",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", formData);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error.response ? error.response.data : "An error occurred");
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
              
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>

                <form className="form-inline my-2 my-lg-0"></form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <select name="role_id" value={formData.role_id} onChange={handleChange}>
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default RegisterForm;
