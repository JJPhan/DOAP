import React from 'react'
import {requestSneakers, requestSneaker} from '../../actions/sneaker_actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import SneakerIndexItem from './SneakerIndexItem'

class SneakerIndex extends React.Component {
    constructor(props) {
        super(props)
    }

// why do we do component did mount again...?
// so we update the state then have access to to 'sneakers'

    componentDidMount() {
        // debugger
        this.props.requestSneakers()
    }

    render() {
        const {sneakers, requestSneaker} = this.props
        // const nikeCate = snakers.filter(nikes => (sneakers.category === "nike"))
        return (
            <div>
                <div className="index-header"> Shop All </div>
                <ul className="snkr-idx">
                    {sneakers.map(sneaker => 
                    <SneakerIndexItem key={sneaker.id} sneaker={sneaker} /> )}

                </ul>
            </div>
        )
    }
 

}


const mSTP = state => ({
    sneakers: Object.values(state.entities.sneakers) 
})

const mDTP = dispatch => ({
    requestSneakers: () => dispatch(requestSneakers())
})

export default connect(mSTP, mDTP)(SneakerIndex)