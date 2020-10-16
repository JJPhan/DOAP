import { combineReducers } from 'redux';
import  usersReducer from  './users_reducers'
import navBar_reducer from './navbar_reducer'
import SneakersReducer from './sneaker_reducer'
import listingsReducer from './listing_reducers/listing_reducer'
import CartReducer from './cart_reducers/cart_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    navBar: navBar_reducer,
    sneakers: SneakersReducer,
    listings: listingsReducer,
    cart: CartReducer
})

export default entitiesReducer





