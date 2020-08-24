@listings.each do |listing|
    json.set! listing.id do 
        json.sneakerId listing.sneaker_id
        json.size listing.size
        json.price listing.price
    end
end
