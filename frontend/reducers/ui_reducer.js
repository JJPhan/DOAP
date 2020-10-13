import { combineReducers } from 'redux';
import ListingWindowReducer from '../../frontend/reducers/listing_reducers/listing_window_reducer'
import CartWindowReducer from './cart_reducers/cart_window_reducer'

const uiReducer = combineReducers({
    listingWindow: ListingWindowReducer,
    cartWindow: CartWindowReducer
})

export default uiReducer