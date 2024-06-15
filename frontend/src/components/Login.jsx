import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../baseURL';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', formData); 
            console.log(response.data);
            localStorage.setItem('token', response.data.token); 
            navigate('/dashboard'); 
        } catch (error) {
            console.error(error.response ? error.response.data : 'An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='email' 
                name='email'
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
                required 
            />
            <input 
                type='password'
                name='password' 
                value={formData.password} 
                onChange={handleChange} 
                placeholder='Password'
                required 
            />
            <button type='submit'>Login</button>
        </form>
    );
};

export default Login;
