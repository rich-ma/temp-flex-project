import * as APIUtil from '../util/session_api_util';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  APIUtil.setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};






// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
// export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// export const receiveCurrentUser = currentUser => ({
//   type: RECEIVE_CURRENT_USER,
//   currentUser
// });

// export const logoutCurrentUser = () => ({
//   type: LOGOUT_CURRENT_USER,
// });

// export const receiveErrors = errors => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors
// });

// export const signup = user => dispatch => (
//   APIUtil.registerUser(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

// export const login = user => dispatch => (
//   APIUtil.loginUser(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

// export const logout = () => dispatch => (
//   APIUtil.logoutUser().then(user => (
//     dispatch(logoutCurrentUser())
//   ))
// );
