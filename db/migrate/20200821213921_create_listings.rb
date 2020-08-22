class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :user_id, null: false
      t.integer :sneaker_id, null: false
      t.float :size, null: false
      t.integer :price, null: false 
      t.timestamps
    end
    add_index :listings, :user_id
    add_index :listings, :sneaker_id
  end
end
