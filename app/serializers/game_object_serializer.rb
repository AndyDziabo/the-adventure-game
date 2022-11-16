class GameObjectSerializer < ActiveModel::Serializer
  attributes :id, :map, :object_type, :x, :y, :collected
  has_one :saved_game
end
