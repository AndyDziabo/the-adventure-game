class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :map
      t.string :char_type
      t.integer :health_level
      t.integer :health_max
      t.integer :damage
      t.integer :defense
      t.integer :points
      t.integer :x
      t.integer :y
      t.boolean :defeated
      t.boolean :patrol
      t.belongs_to :saved_game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
