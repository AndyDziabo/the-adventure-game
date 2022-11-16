class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :map, :char_type, :health_level, :health_max, :damage, :defense, :points, :x, :y, :defeated, :patrol
  has_one :saved_game
end
