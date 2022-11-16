class InventoriesController < ApplicationController
    def create
        inventory = Inventory.create!(inventory_params)
        render json: inventory, status: :created
    end

    def update
        inventory = Inventory.find(params[:id])
        inventory.update(inventory_params)
        render json: inventory, status: :accepted
    end

    private

    def inventory_params
        params.permit(:health_pack, :weapon, :weapon_strength, :weapon_max, :item_1, :item_2, :item_3, :item_4, :item_5, :item_6)
    end
end
