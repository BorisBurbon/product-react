import { USER_PENDING, USER_FULFILLED, USER_REJECTED, USER_SETNAME } from "../actions/user";

const defaultState = {
    pending: false,
    error: false,
    username: undefined,
    auth: undefined
};

export default function( state = defaultState, action ) {
    switch (action.type) {
        case USER_PENDING: {
            return {
                ...state,
                pending: true
            };

        }
        case USER_REJECTED: {
            return {
                ...state,
                pending: false,
                error: action.payload
            }

        }
        case USER_FULFILLED: {
            return {
                ...state,
                pending: false,
                auth: action.payload.data
            }
        }
        case USER_SETNAME: {
            return {
                ...state,
                username: action.payload
            };
        }
        default:
            return state;
    }

}
