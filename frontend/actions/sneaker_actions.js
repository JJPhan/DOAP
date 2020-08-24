import * as SneakerApiUtil from '../util/sneaker_api_util'

export const RECEIVE_SNEAKERS = "RECEIVE_SNEAKERS";
export const RECEIVE_SNEAKER = "RECEIVE_SNEAKER"

const receiveSneakers = () => ({
    type: RECEIVE_SNEAKERS,
    sneakers
})

const receiveSneaker = (sneaker) => ({
    type: RECEIVE_SNEAKER,
    sneaker
})

export const requestSneakers = () => dispatch => {
    return ( SneakerApiUtil.fetchSneakers()
        .then( () => dispatch(receiveSneakers()), 
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )))
}

export const requestSneaker = () => dispatch => {
    return ( SneakerApiUtil.fetchSneaker(sneaker)
        .then ( (sneaker) => dispatch(receiveSneaker(sneaker)),
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )))

}








