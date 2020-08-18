import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// actions creators
const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})


// thunk action creator 

export const login = (user) => dispatch => (
   SessionAPIUtil.login(user)
        .then(user => dispatchEvent(receiveCurrentUser(user)),
        err => (
            dispatch(receiveErrors(err.respondJSON))
        ))
)

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
        .then(() => dispatch(logoutUser()))
)

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
        .then(user => receiveCurrentUser(user),
        err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)


