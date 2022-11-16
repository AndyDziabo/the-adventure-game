class SavedGamesController < ApplicationController
    def create
        game = @current_user.saved_games.create!(saved_game_params)
        game.game_objects.create!(game_object_defaults)
        game.characters.create!(character_defaults)
        render json: game, status: :created
    end

    def update
        game = SavedGame.find(params[:id])
        game.update(saved_game_params)
        render json: game, status: :accepted
    end

    def destroy
        game = SavedGame.find(params[:id])
        game.destroy
        head :no_content
    end

    def high_scores
        highScore = SavedGame.all.limit(10).order(score: :desc)
        render json: highScore, status: :ok
    end

    private

    def saved_game_params
        params.permit(:name, :map, :xP, :yP, :xM, :yM, :health_level, :health_max, :armor_level, :armor_max, :score, :coins, :inventory_id)
    end

    def game_object_defaults
        [
            {map: "LevelOne", object_type: "coin", x: 129, y: 129, collected: false},
            {map: "LevelOne", object_type: "coin", x: 205, y: 65, collected: false},
            {map: "LevelOne", object_type: "coin", x: 323, y: 65, collected: false},
            {map: "LevelOne", object_type: "coin", x: 400, y: 105, collected: false},
            {map: "LevelOne", object_type: "coin", x: 550, y: 137, collected: false},
            {map: "LevelOne", object_type: "coin", x: 65, y: 210, collected: false},
            {map: "LevelOne", object_type: "coin", x: 329, y: 250, collected: false},
            {map: "LevelTwo", object_type: "coin", x: 478, y: 150, collected: false},
            {map: "LevelTwo", object_type: "axe", x: 420, y: 65, collected: false},
            {map: "LevelOne", object_type: "health", x: 120, y: 235, collected: false},
            {map: "LevelOne", object_type: "sword", x: 440, y: 55, collected: false},
            {map: "LevelTwo", object_type: "coin", x: 374, y: 65, collected: false},
            {map: "LevelTwo", object_type: "coin", x: 280, y: 145, collected: false},
            {map: "LevelTwo", object_type: "coin", x: 338, y: 257, collected: false},
            {map: "LevelTwo", object_type: "coin", x: 128, y: 225, collected: false},
            {map: "LevelTwo", object_type: "coin", x: 36, y: 225, collected: false},
            {map: "LevelTwo", object_type: "coin", x: 116, y: 101, collected: false},
            {map: "LevelTwo", object_type: "health", x: 60, y: 50, collected: false}
        ]
    end

    def character_defaults
        [
            {map: "LevelOne", char_type: "ted", health_level: 100, health_max: 100, damage: 10, defense: 5, points: 40, x: 100, y: 100, defeated: false, patrol: true}
        ]
    end
end
