import React from 'react'
import { requestSneakers, requestSneaker } from '../../../actions/sneaker_actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import AdidasIndexItem from './AdidasIndexItem'

class AdidasIndex extends React.Component {
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
        const adidas_s = sneakers.filter(sneaker => (sneaker.brand === "Adidas"))
        return (
            <div>
                <div className="category-description">
                    <h1> ADIDAS </h1>
                    <div className="category1-description">
                            Brothers Rudi and Adi Dassler started producing sports shoes after WWI. In 1949, after parting ways, Adi founded adidas turning a small sneaker company into a global icon that has redefined both sports and streetwear with Stan Smiths, covetable classics and the Yeezy sneaker phenomena.
                    </div>
                </div>
                <ul className="snkr-idx">
                    {adidas_s.map(adidas =>
                        <AdidasIndexItem key={adidas.id} adidas={adidas} />)}

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

export default connect(mSTP, mDTP)(AdidasIndex)