import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser, CLEAR_SESSION_ERRORS } from '../../util/session_api_util';
import SessionForm from './session_form';
import { fetchLocations } from '../../actions/location_actions';
import { fetchCategories } from '../../actions/category_actions';
import { fetchTimes } from '../../actions/times_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: 'signup',
    navLink: <Link to="/login">Log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(registerUser(user)),
    fetchLocations: () => dispatch(fetchLocations()),
    clearSessionErrors: () => dispatch({ type: CLEAR_SESSION_ERRORS }),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchTimes: () => dispatch(fetchTimes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);