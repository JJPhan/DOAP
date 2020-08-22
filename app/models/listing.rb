class Listing < ApplicationRecord

    validation :sneaker_id, :size, :price, presence: true
    validateion :sneaker_id, unqueness: true
    
    belongs_to :sneaker,
        foreign_key: :sneaker_id,
        class_name: :Sneaker



end
