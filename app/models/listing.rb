# == Schema Information
#
# Table name: listings
#
#  id         :bigint           not null, primary key
#  size       :float            not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  sneaker_id :integer          not null
#
class Listing < ApplicationRecord

    validates :sneaker_id, :size, :price, presence: true
    
    belongs_to :sneaker,
        foreign_key: :sneaker_id,
        class_name: :Sneaker

    has_one :cart_item,
        foreign_key: :listing_id,
        class_name: :Cart_item

end
