import React, {Component} from 'react';
import {connect} from 'react-redux';

import UserForm from '../components/userForm';

import {getLoginCreator, getRegisterCreator, userSetNameCreator} from '../actions/user';

class App extends Component {

  login(data) {
    this.props.dispatch(getLoginCreator(data));
  }

  register(data) {
    this.props.dispatch(getRegisterCreator(data));
  }

  setName(username) {
    this.props.dispatch(userSetNameCreator(username));
  }

  getStatus() {
    const props = this.props;
    if (props.pending) {
      return "Waiting for server response";
    }
    if (props.error) {
      return `Error! ${this.user.error}`;
    }
    if (props.auth) {
      if (props.auth.success && props.username) {
        return `You are loged in as ${props.username}`;
      }
      if (!props.auth.success) {
        return `Error! ${props.auth.message}`;
      }
    }
    return "You are not loged in";
  }

  render() {
    return (
      <UserForm
        login={ this.login.bind(this) }
        register={ this.register.bind(this) }
        setName={ this.setName.bind(this) }
        getStatus={ this.getStatus.bind(this) }/>
    );
  }
}

function select(state) {
  return state.user
}

export default connect(select)(App);
