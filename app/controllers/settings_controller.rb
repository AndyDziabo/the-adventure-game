class SettingsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        setting = Setting.create!(settings_params)
        render json: settings, status: :created
    end

    def update
        set = Setting.find(params[:id])
        set.update(settings_params)
        render json: set, status: :accepted
    end

    private

    def settings_params
        params.permit(:up_key, :up_keyCode, :down_key, :down_keyCode, :left_key, :left_keyCode, :right_key, :right_keyCode, :attack_key, :attack_keyCode, :user_id)
    end
end
