import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './SessionForm'
import { close_sidebar_action } from '../../actions/navbar_actions'

const mSTP = (state, ownProps) => ({
    // Bbnb uses ( {errors} )
    errors: state.errors.session,
    formType: 'login'
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeSide: (is_closed) => dispatch(close_sidebar_action(is_closed)),

})

export default connect(mSTP, mDTP)(SessionForm)