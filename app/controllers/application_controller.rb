class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    helper_method :current_user, :login?
    #CRLLL14

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        redirect_to new_session_url unless login?
    end

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def login?
        !!current_user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
    
end
