class Api::SneakersController < ApplicationController
    
    def show
        @sneaker = Sneaker.find(params[:id])
        if @sneaker 
            render :show
        else
            render json: ["Not found, invalid sneaker id"], status: 404
        end
    end

    def index
        @sneakers = Sneaker.all
        # debugger
        render :index
    end

    def search
        @sneakers = 
            Sneaker.where("name LIKE ?", "%" + params[:q] + "%") 
            # Sneaker.where("description LIKE ?", "%" + params[:q] + "%") || 
            # Sneaker.where("brand LIKE ?", "%" + params[:q] + "%") || 
            # Sneaker.where("colorway LIKE ?", "%" + params[:q] + "%") || 
            # Sneaker.where("silhouette LIKE ?", "%" + params[:q] + "%") || 
            # Sneaker.where("category LIKE ?", "%" + params[:q] + "%")

    end

    # json.array! @sneakers, :name, :description, :release_date, :sku, :brand, :colorway, :silhouette, :category

end
