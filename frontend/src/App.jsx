import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './forms/RequestForm';



const App = () => {
    return (
        <Router>
            <Routes>
                 <Route path='/register' element={<Register />} /> 
                <Route path='/create-profile' element={<NewProfile />} /> 
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/auth/login' element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
