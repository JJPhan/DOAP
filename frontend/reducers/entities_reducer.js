import { combineReducers } from 'redux';
import  usersReducer from  './users_reducers'
import navBar_reducer from './navbar_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    navBar: navBar_reducer
})

export default entitiesReducer





