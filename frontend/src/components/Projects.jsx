import React, { useEffect, useState } from 'react';
import api from '../baseURL';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get('/projects', {
                    headers: {
                        'pl-access-token': localStorage.getItem('token')
                    }
                });
                setProjects(response.data);
            } catch (error) {
                console.error(error.response ? error.response.data : 'There was an error. Please contact support');
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className='projects'>
            <h1>My Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        {project.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
