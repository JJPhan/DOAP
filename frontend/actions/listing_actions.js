import * as ListingApiUtil from '../util/listing_api_util'

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";

export const IS_LIST_OPEN = "IS_LIST_OPEN";
export const IS_LIST_CLOSED = "IS_LIST_CLOSED";

const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
})

const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
})

const receiveListingErrors = (errors) => ({
    type: RECEIVE_LISTING_ERRORS,
    errors
})

export const openListings = (is_open) => ({
    type: IS_LIST_OPEN, is_open
})

export const closeListings = (is_closed) => ({
    type: IS_LIST_CLOSED, is_closed
})

export const requestListings = (sneakerId) => dispatch => {
    return ( ListingApiUtil.fetchListings(sneakerId)
        .then(listings => dispatch(receiveListings(listings)),
        err => (
            dispatch(receiveListingErrors(err.responseJson))
        ))
)}

export const requestListing = () => dispatch => {
    return ( ListingApiUtil.fetchListing(listing)
        .then(listing => dispatch(receiveListing(listing))),
        err => (
            dispatch(receiveListingErrors(err.responseJson))
        )
)}