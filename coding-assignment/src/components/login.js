import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
        <div className="card" id="login">
            <br/>
            <div className="card-header">
                <h3>Login</h3>
            </div>
            <div className="card-body">
                <input type="text" placeholder="Username"></input>
                <br></br>
                <input type="text" placeholder="Password"></input>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">Submit</button>
            </div>
        </div>
        );
    }
}