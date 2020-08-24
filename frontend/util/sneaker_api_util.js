export const fetchSneakers = () => (
    $.ajax({
        method: "GET",
        url: "/api/sneakers"
    })
)

export const fetchSneaker = (sneakerId) => (
    $.ajax({
        method: "GET",
        url: `/api/sneakers/${sneakerId}`
    })
)

