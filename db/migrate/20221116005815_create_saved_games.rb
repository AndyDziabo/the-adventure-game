class CreateSavedGames < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_games do |t|
      t.string :name
      t.string :map
      t.integer :health_level
      t.integer :health_max
      t.integer :armor_level
      t.integer :armor_max
      t.integer :score
      t.integer :coins
      t.integer :xP
      t.integer :yP
      t.integer :xM
      t.integer :yM
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :inventory, null: false, foreign_key: true

      t.timestamps
    end
  end
end
