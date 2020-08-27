import { RECEIVE_LISTINGS,
    RECEIVE_LISTING } from '../../actions/listing_actions'

const listingsReducer = (state = {}, action ) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_LISTINGS:
            return action.listings
        case RECEIVE_LISTING:
            return nextState[action.listing.id] = action.listing
        default:
            return state
    }
}

export default listingsReducer
    