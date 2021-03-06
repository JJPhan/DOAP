import React from 'react'
import { requestSneakers, requestSneaker } from '../../../actions/sneaker_actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import JordanIndexItem from './JordanIndexItem'

class JordanIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    // why do we do component did mount again...?
    // so we update the state then have access to to 'sneakers'

    componentDidMount() {
        window.scrollTo(0,0)
        this.props.requestSneakers()
    }

    render() {
        const { sneakers, requestSneaker } = this.props
        const jordans = sneakers.filter(sneaker => (sneaker.brand === "Air Jordan"))
        return (
            <div>
                <div className="category-description">
                    <h1> AIR JORDAN </h1>
                    <div className="category1-description">
                        Originally released in 1985, the Air Jordan 1 is rightfully billed as the sneaker that started it all. When Michael Jordan stepped onto the hardwood in the original Black/Red colorway, the shoe immediately earned a legion of fans while kick-starting the history of flight.
                    </div>

                    <div className="category2-description">
                        Designed by Tinker Hatfield, the Jordan Retro 3 is the sneaker that introduced elephant print and visible Air to Michael Jordan’s signature line. Embroidered on the tongue was the new Jumpman logo, a fitting icon for the shoe that MJ wore when he took flight from the free throw line during the ’88 Dunk Contest.
                    </div>
                </div>

                <ul className="snkr-idx">
                    {jordans.map(jordan =>
                        <JordanIndexItem key={jordan.id} jordan={jordan} />)}

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

export default connect(mSTP, mDTP)(JordanIndex)