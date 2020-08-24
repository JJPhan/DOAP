class RemoveUnique < ActiveRecord::Migration[5.2]
  def change
    remove_column :sneakers, :name
    add_column :sneakers, :name, :string, null: false
    add_index :sneakers, :name
    remove_column :listings, :sneaker_id
    add_column :listings, :sneaker_id, :integer, null: false
    add_index :listings, :sneaker_id
  end
end
