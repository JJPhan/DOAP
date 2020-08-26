import { RECEIVE_SNEAKER_ERRORS } from '../actions/sneaker_actions'


const sneakersErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SNEAKER_ERRORS:
            return action.errors
        default:
            return state
    }
}

export default sneakersErrorsReducer
