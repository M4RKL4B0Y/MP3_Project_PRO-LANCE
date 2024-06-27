import React, { useState } from 'react';
import api from '../baseURL';

const Home = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role_id: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    try {
      const endpoint = type === 'register' ? '/auth/signup' : '/auth/login';
      const response = await api.post(endpoint, formData);
      console.log(response.data);
      // Redirect to dashboard if login is successful
      if (type === 'login') window.location.href = '/dashboard';
    } catch (error) {
      console.error(error.response ? error.response.data : 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Welcome to ProLance</h1>
      <form onSubmit={(e) => handleSubmit(e, 'register')}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Username' required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' required />
        <select name="role_id" value={formData.role_id} onChange={handleChange}>
          <option value="" disabled>Select Role</option>
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <form onSubmit={(e) => handleSubmit(e, 'login')}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Home;
