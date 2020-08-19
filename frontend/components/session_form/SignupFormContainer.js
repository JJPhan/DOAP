import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './SessionForm';
import {signup} from '../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: errors.session,
    formType: 'signup'
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)