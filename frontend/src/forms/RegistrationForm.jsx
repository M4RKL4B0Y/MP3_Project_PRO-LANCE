import React, { useState } from 'react';
import { useHistory } from 'react-router-dom;'
import api from '../baseURL'; 

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role_id: ''
    });

    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/signup', formData);
            const { userId, role_id } = response.data;

            if (role_id === 'freelancer') {
                history.push(`/create-profile?freelancer_id=${userId}`);
            } else {
                history.push('/dashboard');
            }
        } catch (error) {
            console.error(error.response ? error.response.data : 'An error occurred');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='name' 
                id='name'
                value={formData.name} 
                onChange={handleChange} 
                placeholder='Name'
                required 
            />    
            <input 
                type='email' 
                name='email' 
                id='email'
                value={formData.email} 
                onChange={handleChange} 
                placeholder='Email' 
                required 
            /> 
            <input 
                type='password' 
                name='password' 
                id='password'
                value={formData.password} 
                onChange={handleChange} 
                placeholder='Password' 
                required 
            />            
            
            <label htmlFor='role_id'>Role</label>
            <select name='role_id' id='role_id' value={formData.role_id} onChange={handleChange} required>
                <option value='' disabled>Select role</option>
                <option value='client'>Client</option>
                <option value='freelancer'>Freelancer</option>
                <option value='admin'>Admin</option>
            </select>
            <button type='submit'>Register</button>
        </form>
    );
};

export default Register;
