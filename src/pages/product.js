import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from "axios";
import api from "../api";

import Product from '../components/product';
import ProductComment from '../components/productComment';
import ProductCommentForm from '../components/productCommentForm';

import { commentsLoadCreator, commentAddFulfilledCreator,
    commentAddCreator, commentAddPendingCreator, commentAddRejectedCreator } from '../actions/comments';

class App extends Component {
    componentWillMount() {
        //load comments
        this.props.dispatch(
            commentsLoadCreator(this.props.params.product)
        );
    }

    render() {
      console.log('props', this.props)
        const { params } = this.props;
        const products = this.props.products;
        const product = products.filter( (elem) => elem.id === parseInt(params.product))[0];
      console.log('product', product)
        const comments = this.props.comments || [];

        return (
            <div className="products">
                <Product data={ product } full={ true }/>

                <div className="comments">
                    <ProductCommentForm
                        submit={ this.postComment.bind(this) }
                        user={ this.props.user }
                        getStatus={ this.getStatus.bind(this) } />

                    {
                        comments.map( (elem, id) =>
                            <ProductComment key={ id } data={ elem } />
                        )
                    }
                </div>

            </div>
        );
    }

    getStatus() {
        const props = this.props.comments;
        if (props.pending) {
            return "Waiting for server response";
        }
        if (props.error) {
            return `Error! ${this.user.error}`;
        }
        return "Write a comment";
    }

    postComment(data) {
        const token  = this.props.user.auth.token;
        const productId = this.props.params.product;
        const user = this.props.user;

        const comment = {
            ...data,
            created_by: {
                    username:user.username,
                },
            created_at: 'now'
        }

        //thunk to optimistic render and post comment
        this.props.dispatch( (dispatch) => {
            //upd comments
            dispatch(commentAddCreator(comment));

            //post comment
            dispatch(commentAddPendingCreator());

            axios.post( `${api.comments}${productId}`,
                data,
                {headers: {'Authorization': `Token ${ token }`} }
            )
            .then( (res) => {
                dispatch(commentAddFulfilledCreator());
            })
            .catch( (e) => {
                dispatch(commentAddRejectedCreator(e));
            });
        });
    }
}

function select(state) {
    return {
        products: state.products.products,
        comments: state.comments.comments,
        user: state.user
    }
}

export default connect(select)(App);
