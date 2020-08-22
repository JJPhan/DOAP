class EditIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :listings, :user_id
    remove_index :listings, :sneaker_id
    add_index :listings, :sneaker_id, unique: true
  end
end
