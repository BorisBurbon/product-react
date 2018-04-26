import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

import logo from '../../img/brain.png'

import '../../components/nav/style.css';

export default class Nav extends Component {
  getUser() {
    if (this.props.logged) {
      return (
        <div className="logged">
          Logged as: <span>{ this.props.username }</span>
        </div>
      )
    }
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-left">
            <IndexLink to="/" className="nav-link logo" activeClassName="active"><img src={logo} className="logo"
                                                                                      alt="logo"/></IndexLink>
          </div>
          <div className="nav-right">
            { this.getUser() }
            <Link to="login" className="nav-link" activeClassName="active">LogIn / SignUp</Link>
          </div>
        </div>
      </nav>
    )
  }
}
