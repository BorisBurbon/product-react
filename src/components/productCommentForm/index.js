import React, { Component } from 'react';


import '../../components/productCommentForm/style.css';

//import api from '../../api';

export default class ProductCommentForm extends Component {

    submit(e) {
        e.preventDefault();

        const data = {
            text: this.refs.text.value,
            rate: this.refs.rate.value
        }

        if (data.text === "" || data.rate === "") {
            return false;
        } else {
            this.clearForm();
            this.props.submit(data);
        }
    }

    clearForm() {
        this.refs.text.value = "";
    }

    checkLogin() {
        const user = this.props.user;
        if (user.auth){
            return (!user.pending && !user.error && user.auth.success);
        } else {
            return false;
        }
    }

    getForm() {
        return (
            <div>
                <h3 className="comment-form-title"> { this.props.getStatus() } </h3>
                <div className="comment-form-input-group">
                    <label htmlFor="" className="comment-form-label">Comment : </label>
                    <textarea id="" rows="5" ref="text" className="comment-form-input"></textarea>
                </div>
                <div className="comment-form-input-group">
                    <label htmlFor="" className="comment-form-label">Rate: </label>
                    <select ref="rate" className="comment-form-select">
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>

                <button type="submit" className="comment-form-submit">Submit</button>
            </div>
        )
    }
    getWarning() {
        return (
            <h3 className="comment-form-title">LogIn or SignUp to write comments!</h3>
        )
    }

    render() {
        const loggedIn = this.checkLogin();
        const child = loggedIn ? this.getForm() : this.getWarning();
        return(
            <form className="comment-form" onSubmit={ this.submit.bind(this) }>
                { child }
            </form>
        )
    }
}
