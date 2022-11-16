class Inventory < ApplicationRecord
    has_many :saved_games, dependent: :destroy
    has_many :users, through: :saved_games
end
