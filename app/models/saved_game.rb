class SavedGame < ApplicationRecord
  belongs_to :user
  belongs_to :inventory
  has_many :game_objects, dependent: :destroy
  has_many :characters, dependent: :destroy
end
