import React, { Component } from 'react';

import '../../components/userForm/style.css';

export default class LoginForm extends Component {

    validateForm() {
        const data = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        if (data.username === "") return false;
        if (data.password === "") return false;

        return data;
    }

    login() {
        const data =  this.validateForm();
        if (data) {
            this.props.setName(data.username);
            this.props.login(data);
        }
    }
    register() {
        const data =  this.validateForm();

        if (data) {
            this.props.setName(data.username);
            this.props.register(data);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
          <div className="form-block">
            <form className="login" onSubmit={ this.handleSubmit.bind(this) }>
              <h3 className="login-title">
                { this.props.getStatus() }
              </h3>
              <div className="login-input-group">
                <label htmlFor="username" className="login-label">Username: </label>
                <input type="text" className="login-input" ref="username" id="username" required="true"/>
              </div>
              <div className="login-input-group">
                <label htmlFor="password" className="login-label">Password: </label>
                <input type="password" className="login-input" ref="password" id="password" required="true"/>
              </div>
              <div className="login-input-group login-input-group_submits">
                <button type="submit" className="login-submit" onClick={ this.login.bind(this) }>LogIn</button>
                <button type="submit" className="login-submit" onClick={ this.register.bind(this) }>SignUp</button>
              </div>
            </form>
          </div>

        )
    }
}
