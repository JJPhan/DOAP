class ChangeShoppingCartsToShoppingCartItems < ActiveRecord::Migration[5.2]
  def change
    rename_table :shopping_carts, :cart_items
  end
end
