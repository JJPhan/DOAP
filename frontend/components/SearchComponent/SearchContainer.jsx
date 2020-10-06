import React from 'react'
import { connect } from 'react-redux'
import Search from './Search'
import {requestSneakers, requestSneaker} from '../../actions/sneaker_actions'


const mSTP = (state, ownProps) => ({
    // sneakers: state.entities.sneakers
    sneakers: Object.values(state.entities.sneakers) 

})

const mDTP = (dispatch) => ({
    requestSneakers: () => dispatch(requestSneakers()) 
})

export default connect(mSTP, mDTP)(Search)