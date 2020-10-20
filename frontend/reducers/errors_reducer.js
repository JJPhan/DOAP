import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducers';
import sneakersErrorsReducer from './sneaker_errors_reducer';
import listingsErrorsReducer from './listing_errors_reducer';
import cartErrorsReducer from './cart_error_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    sneaker: sneakersErrorsReducer,
    listings: listingsErrorsReducer,
    cart: cartErrorsReducer,
})

export default errorsReducer