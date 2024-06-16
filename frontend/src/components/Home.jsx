import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Prolance</h1>
            <nav>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>          
            </nav>
            </div>

    );
};
export default Home;