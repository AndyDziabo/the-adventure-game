class SavedGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :map, :health_level, :health_max, :armor_level, :armor_max, :score, :coins, :xP, :yP, :xM, :yM
  has_one :user
  has_one :inventory
  has_many :game_objects
  has_many :characters
end
