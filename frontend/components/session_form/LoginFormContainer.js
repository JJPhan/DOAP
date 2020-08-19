import { connect } from 'react-redux';
import React from 'react';
import { login } from '../actions/session_actions';
import SessionForm from './SessionForm'

const mSTP = (state, ownProps) => ({
    // Bbnb uses ( {errors} )
    errors: errors.session,
    formType: 'login'
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)