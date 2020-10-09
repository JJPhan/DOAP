import React from 'react'
import {requestSneakers, requestSneaker} from '../../actions/sneaker_actions'
import { connect } from 'react-redux'
import SearchIndex from './SearchIndex'
import {withRouter} from 'react-router-dom'

const mSTP = state => ({
    sneakers: Object.values(state.entities.sneakers) 
})

const mDTP = dispatch => ({
    requestSneakers: () => dispatch(requestSneakers())
})

export default withRouter(connect(mSTP, mDTP)(SearchIndex))