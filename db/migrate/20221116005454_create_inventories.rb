class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.integer :health_pack
      t.string :weapon
      t.integer :weapon_strength
      t.integer :weapon_max
      t.integer :item_1
      t.integer :item_2
      t.integer :item_3
      t.integer :item_4
      t.integer :item_5
      t.integer :item_6

      t.timestamps
    end
  end
end
