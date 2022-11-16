class CreateGameObjects < ActiveRecord::Migration[6.1]
  def change
    create_table :game_objects do |t|
      t.string :map
      t.string :object_type
      t.integer :x
      t.integer :y
      t.boolean :collected
      t.belongs_to :saved_game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
