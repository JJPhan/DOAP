json.set! @cart_item.id do
    json.extract! @cart_item, :id, :user_id, :listing_id
    json.sneakerId @cart_item.listings.sneaker.id
    json.sneakerName @cart_item.listings.sneaker.name
    json.sneakerSku @cart_item.listings.sneaker.sku
    json.sneakerSize @cart_item.listings.size
    json.sneakerPrice @cart_item.listings.price
    json.sneakerPhoto url_for(@cart_item.listings.sneaker.photo[0])
end

