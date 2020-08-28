# == Schema Information
#
# Table name: shopping_carts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ShoppingCart < ApplicationRecord
    validates :user_id, :listing_id, presence: true, uniqueness: true

    # belongs_to :user,
    #     foreign_key: :user_id,
    #     class_name: :User

    # has_many :listings,
    #     foreign_key: :listing_id,
    #     class_name: :Listing

end
