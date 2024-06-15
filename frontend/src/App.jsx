import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './forms/RegistrationForm';
import NewProfile from './forms/ProfileForm';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/create-profile' element={<NewProfile />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
