import React from 'react'
import {requestSneaker} from '../../actions/sneaker_actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class SneakerComponent extends React.Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.requestSneaker(this.props.match.params.sneakerId)
    }


    render() {
        const {sneaker} = this.props
        if (!this.props.sneaker) return null 
        
        return (
            <div>
                <div className="sneaker-show-form">
                    <div className="sneaker-show-left">
                        <img className="sneaker-show-img" src={`${sneaker.photoUrls[0]}`} />
                        <div> {`${sneaker.brand} / ${sneaker.silhouette} / ${sneaker.name}`} </div>
                    </div>
                    <div className="sneaker-show-right">
                        <div> {`${sneaker.name}`} </div>
                        <div> {`${sneaker.sku}`}  </div>
                    </div>
                </div>
                <div className="sneaker-desc">
                    {`${sneaker.description}`}
                </div>

            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    // debugger
    return ( {

        sneaker: state.entities.sneakers[ownProps.match.params.sneakerId]
    })
}


const mDTP = (dispatch) => ({
    requestSneaker: (sneakerId) => dispatch(requestSneaker(sneakerId))
})


export default connect(mSTP, mDTP)(SneakerComponent)