import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Projects from './Projects';
import Tasks from './Tasks';
import Comments from './Comments';
import RequestForm from '../forms/RequestForm';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="tasks">Tasks</Link>
                    </li>
                    <li>
                        <Link to="comments">Comments</Link>
                    </li>
                    <li>
                        <Link to="newRequest">New Request</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="projects" element={<Projects />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="comments" element={<Comments />} />
                <Route path="newRequest" element={<RequestForm />} />
            </Routes>
        </div>
    );
};

export default Dashboard;
