import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../baseURL';

const NewProfile = () => {
    const [profileData, setProfileData] = useState({
        title: '',
        trade_offering: '',
        skills: '',
        experience: '',
        location: '',
        languages: '',
        contact: '',
        image: ''
    });

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const freelancer_id = searchParams.get('freelancer_id');

    const handleChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/profiles', { ...profileData, freelancer_id });
            console.log(response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error(error.response ? error.response.data : 'An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input 
                type='text'
                name='title'
                value={profileData.title}
                onChange={handleChange}
                placeholder='Title'
                required
            />
            <label htmlFor='trade_offering'>Trade Offering</label>
            <input 
                type='text' 
                name='trade_offering' 
                id='trade_offering'
                value={profileData.trade_offering} 
                onChange={handleChange} 
                placeholder='Trade Offering' 
            />
            <label htmlFor='skills'>Skills</label>
            <input 
                type='text' 
                name='skills' 
                id='skills'
                value={profileData.skills} 
                onChange={handleChange} 
                placeholder='Skills' 
            />
            <label htmlFor='experience'>Experience</label>
            <input 
                type='text' 
                name='experience' 
                id='experience'
                value={profileData.experience} 
                onChange={handleChange} 
                placeholder='Experience' 
            />
            <label htmlFor='location'>Location</label>
            <input 
                type='text' 
                name='location' 
                id='location'
                value={profileData.location} 
                onChange={handleChange} 
                placeholder='Location' 
            />
            <label htmlFor='languages'>Languages</label>
            <input 
                type='text' 
                name='languages' 
                id='languages'
                value={profileData.languages} 
                onChange={handleChange} 
                placeholder='Languages' 
            />
            <label htmlFor='contact'>Contact</label>
            <input 
                type='text' 
                name='contact' 
                id='contact'
                value={profileData.contact} 
                onChange={handleChange} 
                placeholder='Contact' 
            />
            <label htmlFor='image'>Image</label>
            <input 
                type='text' 
                name='image' 
                id='image'
                value={profileData.image} 
                onChange={handleChange} 
                placeholder='Image' 
            />
            <button type='submit'>Create Profile</button>
        </form>
    );
};

export default NewProfile;
