import { connect } from 'react-redux'
import RecFeatures from './FeaturedRec'
import {requestSneakers} from '../../actions/sneaker_actions'

const mSTP = (state) => {
    return {
        sneakers: Object.values(state.entities.sneakers),
    }
}

const mDTP = dispatch => {
    return {
        requestSneakers: () => dispatch(requestSneakers())
        
    }
}

export default connect(mSTP, mDTP)(RecFeatures)