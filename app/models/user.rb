class User < ApplicationRecord
    has_many :settings, dependent: :destroy
    has_many :saved_games, dependent: :destroy
    has_many :inventories, through: :saved_games

    has_secure_password
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
end
