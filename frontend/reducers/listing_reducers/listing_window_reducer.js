import { IS_OPEN, IS_CLOSED } from '../../actions/listing_actions'

const ListingWindowReducer = (state = {isOpen: false}, action) => {
    switch(action.type) {
        case IS_OPEN:
            return { isOpen: action.is_open }
        case IS_CLOSED:
            return { isOpen: action.is_closed }
        default: 
            return state
    }
}


export default ListingWindowReducer