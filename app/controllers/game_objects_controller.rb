class GameObjectsController < ApplicationController

    def index
        render json: GameObject.all, status: :ok
    end

    def create
        gameObject = GameOjbect.create!(game_object_params)
        render json: gameObject, status: :created
    end

    def update
        game = GameObject.find(params[:id])
        game.update(game_object_params)
        render json: game, status: :accepted
    end

    private

    def game_object_params
        params.permit(:map, :object_type, :x, :y, :collected, :saved_game_id)
    end
end
