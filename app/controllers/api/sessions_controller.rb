class Api::SessionsController < ApplicationController
#login 
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    
    end

# logout
    def destroy
        # @user = current_user
        if current_user
            logout
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end

end

