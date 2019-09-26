import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <div className="login-page">
        <form>
          <div className="form-group">
            <label htmlFor="inputUserName">User</label>
            <input type="text" className="form-control" id="inputUserName"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;