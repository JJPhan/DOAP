    @sneakers.each do |sneaker|
        json.set! sneaker.id do
            json.extract! sneaker, :id, :name, :description, :release_date, :sku, :brand, :colorway, :silhouette, :category
            json.photoUrls sneaker.photo.map { |file| url_for(file) }
            # json.photoUrls url_for(sneaker.photo)
        end
    end


    # {
    #     id: {
    #         id:
    #         name:
    #         desc:
    #         ...
    #         photoUrls: [1, 2]
    #     }

    #     id: {

    #     }

    #     id: {
            
    #     }
    # }

     



