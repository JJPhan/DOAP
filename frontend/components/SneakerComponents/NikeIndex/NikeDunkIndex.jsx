import React from 'react'
import { requestSneakers, requestSneaker } from '../../../actions/sneaker_actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import NikeDunkIndexItem from './NikeDunkIndexItem'

class NikeDunkIndex extends React.Component {
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
        const { sneakers, requestSneaker } = this.props
        const dunks = sneakers.filter(sneaker => (sneaker.brand === "Nike"))
        return (
            <div>
                <div className="category-description">
                    <h1> Nike Dunks </h1>
                    <div className="category1-description">
                        Starting off as a college basketball team shoe, the Nike Dunk has evolved from the hardwood to the streets. Now a staple in Nike Sportswear and Nike SB, the Dunk stays true to its roots.
                    </div>
                </div>
                <ul className="snkr-idx">
                    {dunks.map(dunk =>
                        <NikeDunkIndexItem key={dunk.id} dunk={dunk} />)}

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

export default connect(mSTP, mDTP)(NikeDunkIndex)