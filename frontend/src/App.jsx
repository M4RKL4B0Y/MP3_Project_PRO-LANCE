import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './forms/RegistrationForm';
import RequestForm from './forms/RequestForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/request' element={<RequestForm />} />
      </Routes>
    </Router>
  );
};

export default App;
