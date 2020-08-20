import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './SessionForm';
import {signup, login, clearErrors} from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user)  => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())

    // demoLogin: () => dispatch(demoLogin())
})

export default connect(mSTP, mDTP)(SessionForm)