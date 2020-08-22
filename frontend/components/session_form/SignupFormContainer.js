import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './SessionForm';
import {signup, login, clearErrors} from '../../actions/session_actions';
import { close_sidebar_action } from '../../actions/navbar_actions'

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user)  => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeSide: (is_closed) => dispatch(close_sidebar_action(is_closed)),

    // demoLogin: () => dispatch(demoLogin())
})

export default connect(mSTP, mDTP)(SessionForm)