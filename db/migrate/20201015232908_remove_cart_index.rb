class RemoveCartIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :cart_items, :listing_id
    remove_index :cart_items, :user_id
    add_index :cart_items, :user_id, :unique => false
    add_index :cart_items, :listing_id, :unique => false
    add_index :cart_items, [:user_id, :listing_id], :unique => true

  end
end
