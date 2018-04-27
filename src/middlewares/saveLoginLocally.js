import {USER_FULFILLED} from '../actions/user'

export default store => next => action => {
  if (action.type === USER_FULFILLED) {
    const state = store.getState();
    const user = {...state.user};
    user.auth = action.payload.data;
    user.pending = false;
    user.error = false;
    localStorage.setItem('user', JSON.stringify(user))
  }
  next(action);
}

export function getUserFromStorage() {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  } else {
    return false;
  }
}
