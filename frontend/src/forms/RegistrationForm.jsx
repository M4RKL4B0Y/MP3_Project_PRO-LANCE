import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'client'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name' required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' required />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="client">Client</option>
        <option value="freelancer">Freelancer</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
