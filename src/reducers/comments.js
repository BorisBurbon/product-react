import { COMMENTS_PENDING, COMMENTS_FULFIlLED, COMMENTS_REJECTED,
        COMMENT_ADD, COMMENT_ADD_PENDING, COMMENT_ADD_FULFILLED, COMMENT_ADD_REJECTED } from "../actions/comments";

const defaultState = {
    pending: false,
    error: false,
    comments: []
};

export default function( state = defaultState, action ) {
    switch (action.type) {
        case COMMENTS_PENDING: {
            return { ...state, pending: true};

        }
        case COMMENTS_REJECTED: {
            return {
                ...state,
                pending: false,
                error: action.payload
            }

        }
        case COMMENTS_FULFIlLED: {
            return {
                ...state,
                pending: false,
                comments: action.payload.data
            }

        }
        case COMMENT_ADD: {
            return addCommentToComments(state, action.payload);

        }
        case COMMENT_ADD_PENDING: {
            return { ...state, pending: true};

        }
        case COMMENT_ADD_REJECTED: {
            return {
                ...state,
                pending: false,
                error: action.payload
            }

        }
        case COMMENT_ADD_FULFILLED: {
            return {
                ...state,
                pending: false,
            }

        }
        default:
            return state;
    }

}

function addCommentToComments(state, comment) {
    let newCollection = state.comments.slice();
    newCollection.push(comment);
    const newState = { ...state, comments: newCollection };
    return newState;
}
