import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducers';
import sneakersErrorsReducer from './sneaker_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    sneaker: sneakersErrorsReducer
})

export default errorsReducer