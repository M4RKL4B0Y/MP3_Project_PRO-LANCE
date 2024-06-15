import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './forms/Register';
import newProfile from './forms/NewProfile';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/create-profile" component={newProfile} />
            </Switch>
        </Router>
    )
}

export default App