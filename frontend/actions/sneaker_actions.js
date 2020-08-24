import * as SneakerApiUtil from '../util/sneaker_api_util'
import {receiveErrors} from './session_actions'

export const RECEIVE_SNEAKERS = "RECEIVE_SNEAKERS";
export const RECEIVE_SNEAKER = "RECEIVE_SNEAKER"


const receiveSneakers = (sneakers) => ({
    type: RECEIVE_SNEAKERS,
    sneakers
})

const receiveSneaker = (sneaker) => ({
    type: RECEIVE_SNEAKER,
    sneaker
})


export const requestSneakers = () => dispatch => {
    return ( SneakerApiUtil.fetchSneakers()
        .then( (sneakers) => dispatch(receiveSneakers(sneakers)), 
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )))
}

export const requestSneaker = (sneakerId) => dispatch => {
    return ( SneakerApiUtil.fetchSneaker(sneakerId)
        .then ( (sneaker) => dispatch(receiveSneaker(sneaker)),
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )))
}








