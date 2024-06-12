import React, { useState, useEffect } from "react";
import axios from 'axios';

const RequestForm = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(''); 
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/types');
        setTypes(response.data);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };
    fetchTypes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTypeObject = types.find(type => type.id === parseInt(selectedType));

    if (selectedTypeObject) {
      if (selectedTypeObject.category === 'project') {
        window.location.href = `/project-form?description=${description}&typeID=${selectedType}`;
      } else {
        window.location.href = `/task-form?description=${description}&typeID=${selectedType}`;
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your project or task"
          required 
        />
        <select 
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          required
        >
          <option value="" disabled>Select a request type</option>
          {types.map(type => (
            <option key={type.id} value={type.id}>{type.name}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestForm;
