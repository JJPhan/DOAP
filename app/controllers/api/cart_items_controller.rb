class Api::CartItemsController < ApplicationController

    def create
        @cart_item = Cart_item.new(cart_item_params)
        if @cart_item.save
            render :show
        else
            render json: ["Invalid params"]
        end

    end

    def index
        @cart_items = Cart_items.all
        render :index
    end

    # def update
    #     @cart_item = Cart.find()
    # end

    # def delete
    # end

    private
    def cart_item_params
        params.require(:cart_item).permit(:user_id, :listing_id)
    end

end
