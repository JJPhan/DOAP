@listings.each do |listing|
    json.set! listing.id do 
        json.id listing.id
        json.sneakerId listing.sneaker_id
        json.size listing.size
        json.price listing.price
    end
end


# {
#     id: {
#         sneaker.id 
#         size
#         price
#     }

#     id: {
#         sneaker.id
#         size
#         price
#     }
# }