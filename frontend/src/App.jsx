import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './forms/RegistrationForm';
import newProfile from './forms/ProfileForm';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/register' component={Register} />
                <Route path='/create-profile' component={newProfile} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default App