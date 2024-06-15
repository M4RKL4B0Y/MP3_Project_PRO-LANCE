import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './forms/RegistrationForm';
import NewProfile from './forms/ProfileForm';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/create-profile' element={<NewProfile />} />
                <Route path='/dashboard/*' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
