class SettingSerializer < ActiveModel::Serializer
  attributes :id, :up_key, :up_keyCode, :down_key, :down_keyCode, :left_key, :left_keyCode, :right_key, :right_keyCode, :attack_key, :attack_keyCode
  has_one :user
end
