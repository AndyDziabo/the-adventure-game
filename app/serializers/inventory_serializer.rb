class InventorySerializer < ActiveModel::Serializer
  attributes :id, :health_pack, :weapon, :weapon_strength, :weapon_max, :item_1, :item_2, :item_3, :item_4, :item_5, :item_6
end
