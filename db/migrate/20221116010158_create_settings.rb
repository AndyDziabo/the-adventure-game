class CreateSettings < ActiveRecord::Migration[6.1]
  def change
    create_table :settings do |t|
      t.string :up_key
      t.integer :up_keyCode
      t.string :down_key
      t.integer :down_keyCode
      t.string :left_key
      t.integer :left_keyCode
      t.string :right_key
      t.integer :right_keyCode
      t.string :attack_key
      t.integer :attack_keyCode
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
