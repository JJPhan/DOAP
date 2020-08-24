# == Schema Information
#
# Table name: sneakers
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  description  :text             not null
#  release_date :date             not null
#  sku          :string           not null
#  brand        :string           not null
#  colorway     :string           not null
#  silhouette   :string           not null
#  category     :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Sneaker < ApplicationRecord

    validates :name, :description, :release_date, :sku, :brand, :colorway, :silhouette, :category, presence: true
    validates :sku, uniqueness: true

    has_many :listings,
        foreign_key: :sneaker_id,
        class_name: :Listing
    
    has_many_attached :photo
    
end
