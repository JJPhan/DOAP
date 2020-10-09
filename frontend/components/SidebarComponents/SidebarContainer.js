import React from 'react';
import {close_sidebar_action} from '../../actions/navbar_actions'
import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions'
import SidebarForm from './SidebarForm'



const mSTP = (state) => {
    let sessionId = state.session.id;
    let currentEmail = "";
    if (sessionId) {
        currentEmail = state.entities.users[sessionId].email }
    return {
        is_open: state.entities.navBar.isOpen,
        isSearch: state.entities.navBar.isSearch,
        currentEmail: currentEmail,
        currentUser: state.session.id,
    }
}

const mDTP = (dispatch) => ({
    closeSide: (is_closed) => dispatch(close_sidebar_action(is_closed)),
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(SidebarForm)