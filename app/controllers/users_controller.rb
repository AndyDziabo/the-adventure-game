class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      user.settings.create!(settings_default)
      render json: user, status: :created
    end
  
    def show
      render json: @current_user
    end

    def user_settings
      render json: @current_user.settings, status: :ok
    end

    def saved_list
      render json: @current_user.saved_games, status: :ok
    end


    private
  
    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end

    def settings_default
      {up_key: "w", up_keyCode: 87, down_key: "s", down_keyCode: 83, left_key: "a", left_keyCode: 65, right_key: "d", right_keyCode: 68, attack_key: "Enter", attack_keyCode: 13}
    end
end
