// export const fetchListings = () => (
//     $.ajax({
//         method: "GET",
//         url: `/api/sneakers/${listing.sneaker_id}/listings/`
//     })
// )

export const fetchListings = (sneakerId) => (
    $.ajax({
        method: "GET",
        url: `/api/sneakers/${sneakerId}/listings`
    })
)


export const fetchListing = (listingId) => (
    $.ajax({
        method: "GET",
        url: `/api/listings/${listingId}`
    })
)

