import {IS_OPEN, IS_CLOSED} from '../actions/navbar_actions'

const navBar_reducer = (state = {isOpen: false, isSearch: false}, action ) => {
    switch (action.type) {
        case IS_OPEN:
            return { isOpen: action.is_open, isSearch: action.isSearch}
                    // isSearch: action.isSearch }
        case IS_CLOSED:
            return { isOpen: action.is_closed }
        default:
            return state
    }
}

export default navBar_reducer