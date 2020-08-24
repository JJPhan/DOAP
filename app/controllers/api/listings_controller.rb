class Api::ListingsController < ApplicationController

    def index
        @listings = Listing.where(sneaker_id: params[:sneaker_id])
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end


end
