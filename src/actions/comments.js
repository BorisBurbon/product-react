import axios from "axios";
import api from "../api";

export const COMMENTS_PENDING = "COMMENTS_PENDING";
export const COMMENTS_FULFIlLED = "COMMENTS_FULFILLED";
export const COMMENTS_REJECTED = "COMMENTS_REJECTED";

//load comments
export function commentsLoadCreator(productId) {
    return {
        type: "COMMENTS",
        payload: axios.get(`${api.comments}${productId}`)
    }
}

export const COMMENT_ADD = "COMMENT_ADD";
export const COMMENT_ADD_PENDING = "COMMENT_ADD_PENDING";
export const COMMENT_ADD_FULFILLED = "COMMENT_ADD_FULFILLED";
export const COMMENT_ADD_REJECTED = "COMMENT_ADD_REJECTED";

//place comment
export function commentAddCreator(comment) {
    return{
        type: COMMENT_ADD,
        payload: comment
    }
}

export function commentAddPendingCreator() {
    return{
        type: COMMENT_ADD_PENDING,
        payload: undefined
    }
}

export function commentAddRejectedCreator(err) {
    return{
        type: COMMENT_ADD_REJECTED,
        payload: err
    }
}

export function commentAddFulfilledCreator() {
    return{
        type: COMMENT_ADD_FULFILLED,
        payload: undefined
    }
}
