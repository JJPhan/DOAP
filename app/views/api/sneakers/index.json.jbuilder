json.sneakers do 
    @sneakers.each do |sneaker|
        json.set! sneaker.id do
            json.extract! sneaker, :name, :description, :release_date, :sku, :brand, :colorway, :silhouette, :category
         end
    end
end