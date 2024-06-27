import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../baseURL';

const SubmitProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        estimate: '',
        statusId: '',
        clientId: '',
        estimateId: '',
        typeId: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/projects', formData);
            console.log('Project created:', response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error creating project:', error.response ? error.response.data : 'An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                placeholder="Title" 
                required 
            />
            <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Description" 
                required 
            />
            <input 
                type="date" 
                name="startDate" 
                value={formData.startDate} 
                onChange={handleChange} 
                required 
            />
            <input 
                type="date" 
                name="endDate" 
                value={formData.endDate} 
                onChange={handleChange} 
                required 
            />
            <input 
                type="number" 
                name="estimate" 
                value={formData.estimate} 
                onChange={handleChange} 
                placeholder="Estimate" 
                required 
            />
            <input 
                type="number" 
                name="statusId" 
                value={formData.statusId} 
                onChange={handleChange} 
                placeholder="Status ID" 
                required 
            />
            <input 
                type="number" 
                name="clientId" 
                value={formData.clientId} 
                onChange={handleChange} 
                placeholder="Client ID" 
                required 
            />
            <input 
                type="number" 
                name="estimateId" 
                value={formData.estimateId} 
                onChange={handleChange} 
                placeholder="Estimate ID" 
                required 
            />
            <input 
                type="number" 
                name="typeId" 
                value={formData.typeId} 
                onChange={handleChange} 
                placeholder="Type ID" 
                required 
            />
            <button type="submit">Create Project</button>
        </form>
    );
};

export default SubmitProject;
