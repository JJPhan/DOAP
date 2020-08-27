class Api::ListingsController < ApplicationController

    def index
        # @listings = Listing.where(sneaker_id: params[:id])
        @listings = Sneaker.find_by(id: params[:sneaker_id]).listings
        if @listings
            render :index
        else
            render json: ["Sneaker Id not found"], status: 404
        end

    end

    def show
        @listing = Listing.find(params[:id])
        if @listing
            render :show
        else
            render json: ["Listing not found"], status: 404
        end
    end

end
