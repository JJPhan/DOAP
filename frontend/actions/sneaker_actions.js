import * as SneakerApiUtil from '../util/sneaker_api_util'
// import {receiveErrors} from './session_actions'

export const RECEIVE_SNEAKERS = "RECEIVE_SNEAKERS";
export const RECEIVE_SNEAKER = "RECEIVE_SNEAKER";
export const RECEIVE_SNEAKER_ERRORS = "RECEIVE_SNEAKER_ERRORS"

const receiveSneakers = (sneakers) => ({
    type: RECEIVE_SNEAKERS,
    sneakers
})

const receiveSneaker = (sneaker) => {
    return ({

        type: RECEIVE_SNEAKER,
        // sneaker: sneaker_payload.sneaker
        sneaker
    })
}

const receiveSneakerErrors = (errors) => {
    return ({
        type: RECEIVE_SNEAKER_ERRORS,
        errors
    })
}

export const requestSneakers = () => dispatch => {
    return ( SneakerApiUtil.fetchSneakers()
        .then( (sneakers) => dispatch(receiveSneakers(sneakers)), 
        err => (
            dispatch(receiveSneakerErrors(err.responseJSON))
        )))
}

export const requestSneaker = (sneakerId) => dispatch => {
    return ( SneakerApiUtil.fetchSneaker(sneakerId)
        .then ( (sneaker) => dispatch(receiveSneaker(sneaker)),
        err => (
            dispatch(receiveSneakerErrors(err.responseJSON))
        )))
}








