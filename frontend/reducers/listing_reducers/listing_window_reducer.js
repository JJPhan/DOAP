import { IS_LIST_OPEN, IS_LIST_CLOSED } from '../../actions/listing_actions'

const ListingWindowReducer = (state = {isOpen: false}, action) => {
    switch(action.type) {
        case IS_LIST_OPEN:
            return { isOpen: action.is_open }
        case IS_LIST_CLOSED:
            return { isOpen: action.is_closed }
        default: 
            return state
    }
}


export default ListingWindowReducer