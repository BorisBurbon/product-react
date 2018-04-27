import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';

import '../../components/productComment/style.css';

export default class ProductComment extends Component {

  render() {
    const data = this.props.data;
    const user = data.created_by;

    const date = data.created_at.slice(0, 10);

    return (
      <div className="comment">
        <header className="comment-header">
          <div className="comment-header__left">
            <div className="comment__username">{ user.username }</div>
            <div className="comment__mark">Rate: { data.rate}
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={data.rate}
                emptyStarColor={'#788892'}
              />
            </div>
          </div>
          <div className="comment__time">{ date }</div>
        </header>
        <div className="comment-text">
          { data.text }
        </div>
      </div>
    )
  }
}
