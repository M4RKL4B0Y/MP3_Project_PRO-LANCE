import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Projects from './Projects';
import Tasks from './Tasks';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </div>
    );
};

export default Dashboard;
