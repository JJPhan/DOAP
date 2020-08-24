export const fetchListings = (listing) => (
    $.ajax({
        method: "GET",
        url: `/api/sneakers/${listing.sneaker_id}/listings/`
    })
)

export const fetchListing = (listingId) => (
    $.ajax({
        method: "GET",
        url: `/api/listings/${listingId}`
    })
)

