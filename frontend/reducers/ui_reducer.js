import { combineReducers } from 'redux';
import ListingWindowReducer from '../../frontend/reducers/listing_reducers/listing_window_reducer'

const uiReducer = combineReducers({
    listingWindow: ListingWindowReducer
})

export default uiReducer