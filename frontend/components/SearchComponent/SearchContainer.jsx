import React from 'react'
import { connect } from 'react-redux'
import Search from './Search'
import {requestSneakers, requestSneaker} from '../../actions/sneaker_actions'
import {close_sidebar_action} from '../../actions/navbar_actions'
import {withRouter} from 'react-router-dom'


const mSTP = (state, ownProps) => ({
    // sneakers: state.entities.sneakers
    sneakers: Object.values(state.entities.sneakers),
    is_open: state.entities.navBar.isOpen,
    isSearch: state.entities.navBar.isSearch,
})

const mDTP = (dispatch) => ({
    closeSide: (is_closed) => dispatch(close_sidebar_action(is_closed)),
    requestSneakers: () => dispatch(requestSneakers()) 
})

export default withRouter(connect(mSTP, mDTP)(Search))