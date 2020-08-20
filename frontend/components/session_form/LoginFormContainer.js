import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './SessionForm'

const mSTP = (state, ownProps) => ({
    // Bbnb uses ( {errors} )
    errors: state.errors.session,
    formType: 'login'
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())

})

export default connect(mSTP, mDTP)(SessionForm)