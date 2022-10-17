import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
        <div className="container" id="navbar">
            <div className="navbar navbar-light">
                <div className="navbar-brand">Week 13 Coding Assignment</div>
                <div className="navbar-nav">
                    <div className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </div>
                    <div className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </div>
                    <div className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}