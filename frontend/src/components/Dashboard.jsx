import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Projects from './Projects';
import Tasks from './Tasks';
import Comments from './Comments.jsx';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/projects`}>Projects</Link>
                    </li>
                    <li>
                        <Link to={`${url}/tasks`}>Tasks</Link>
                    </li>
                    <li>
                        <Link to={`${url}/messages`}>Comments</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path={path}>
                    <h2>My Stuff</h2>
                </Route>
                <Route path={`${path}/projects`} component={Projects} />
                <Route path={`${path}/tasks`} component={Tasks} />
                <Route path={`${path}/messages`} component={Comments} />
            </Switch>
        </div>
    );
};

export default Dashboard;
