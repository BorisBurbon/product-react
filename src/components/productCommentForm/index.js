import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';

import '../../components/productCommentForm/style.css';

export default class ProductCommentForm extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  submit(e) {
    e.preventDefault();

    const data = {
      text: this.refs.text.value,
      rate: this.state.rating
    }
    console.log(data);

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
    if (user.auth) {
      return (!user.pending && !user.error && user.auth.success);
    } else {
      return false;
    }
  }

  getForm() {
    const { rating } = this.state;
    return (
      <div>
        <h3 className="comment-form-title"> { this.props.getStatus() } </h3>
        <div className="form-group">
          <label htmlFor="" className="comment-form-label">Comment : </label>
          <textarea id="" rows="5" ref="text" className="comment-form-input"></textarea>
        </div>
        <div className="form-group inline-group">
          <label htmlFor="" className="comment-form-label">Rating: {rating}</label>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            emptyStarColor={'#788892'}
            onStarClick={this.onStarClick.bind(this)}
          />
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
    return (
      <form className="comment-form" onSubmit={ this.submit.bind(this) }>
        { child }
      </form>
    )
  }
}
