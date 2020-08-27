# json.sneaker do 
    json.extract! @sneaker, :id, :name, :description, :release_date, :sku, :brand, :colorway, :silhouette, :category
    json.photoUrls @sneaker.photo.map { |file| url_for(file) }

# end

json.listings do
    @sneaker.listings.each do |listing|
        json.set! listing.id do
            json.sneakerId listing.sneaker_id
            json.size listing.size
            json.price listing.price
        end
    end
end



# { 
#     :id
# ...
#     photoUrls: {

#     }

#     listings {
#         id: {

#         }
#     }
# }

