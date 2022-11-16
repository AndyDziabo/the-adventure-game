class CharactersController < ApplicationController

    def index
        render json: Character.all, status: :ok
    end

    def create
        char = Character.create!(character_params)
        render json: char, status: :created
    end

    def update
        char = Character.find(params[:id])
        char.update(character_params)
        render json: char, status: :accepted
    end

    private

    def character_params
        params.permit(:map, :char_type, :health_level, :health_max, :damage, :defense, :points, :x, :y, :defeated, patrol, saved_game_id)
    end
end
