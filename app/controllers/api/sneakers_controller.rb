class Api::SneakersController < ApplicationController
    
    def show
        @sneaker = Sneaker.find(params[id:])
        render :json(
    end

    def index

    end


end
