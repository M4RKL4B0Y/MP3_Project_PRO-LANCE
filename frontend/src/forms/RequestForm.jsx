import React, { useState, useEffect } from 'react';
import api from '../baseURL';

const RequestForm = () => {
  const [types, setTypes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [estimate, setEstimate] = useState('');
  const [client_id, setClientID] = useState('');
  const [estimate_id, setEstimateID] = useState('');
  const [type_id, setTypeID] = useState('');
  const [profile_id, setProfileID] = useState('');

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await api.get('/types');
        setTypes(response.data);
      } catch (error) {
        console.error('Error fetching types:', error);
      }
    };
    fetchTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/projects', {
        title,
        description,
        startDate,
        endDate,
        estimate,
        client_id,
        estimate_id,
        type_id,
        profile_id
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : 'An error occurred');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
          required 
        />
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Describe your project or task'
          required 
        />
        <input 
          type='date' 
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder='Start Date'
          required 
        />
        <input 
          type='date' 
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder='End Date'
          required 
        />
        <input 
          type='number' 
          value={estimate}
          onChange={(e) => setEstimate(e.target.value)}
          placeholder='Estimate'
          required 
        />
        <input 
          type='number' 
          value={client_id}
          onChange={(e) => setClientID(e.target.value)}
          placeholder='Client ID'
          required 
        />
        <input 
          type='number' 
          value={estimate_id}
          onChange={(e) => setEstimateID(e.target.value)}
          placeholder='Estimate ID'
          required 
        />
        <select 
          value={type_id}
          onChange={(e) => setTypeID(e.target.value)}
          required
        >
          <option value='' disabled>Select a request type</option>
          {types.map(type => (
            <option key={type.id} value={type.id}>{type.name}</option>
          ))}
        </select>
        <input 
          type='number' 
          value={profile_id}
          onChange={(e) => setProfileID(e.target.value)}
          placeholder='Profile ID'
          required 
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default RequestForm;
