import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../baseURL';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get('/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h1>Your Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
            <Link to="/project-form">Create New Project</Link>
        </div>
    );
};

export default Dashboard;
