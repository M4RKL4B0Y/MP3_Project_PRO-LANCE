import React, { useState, useEffect } from 'react';
import { fetchProjects, fetchProfiles } from '../baseURL';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import './dashboard/Dashboard.css';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const projectsData = await fetchProjects();
        const profilesData = await fetchProfiles();
        setProjects(projectsData);
        setProfiles(profilesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  const handleLogout = () => {
    // Perform logout operation
    navigate('/login');
  };

  return (
    <div className='dashboard'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">PROLANCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/register">New Project</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='content'>
        <h1>Dashboard</h1>
        <div>
          <h2>Projects</h2>
          <ul>
            {projects.map(project => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>My Profile</h2>
          <ul>
            {profiles.map(profile => (
              <li key={profile.id}>{profile.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
