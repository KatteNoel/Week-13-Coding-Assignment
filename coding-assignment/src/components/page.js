import React from 'react';
import Login from './login';
import Navbar from './navbar';

export default class Page extends React.Component {
    render() {
        return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <div id="login-container">
                <Login />
            </div>
        </div>
        );
    }
}