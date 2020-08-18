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
require 'test_helper'

class SneakerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
