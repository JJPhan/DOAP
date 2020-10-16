# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :cart_items,
        foreign_key: :user_id,
        class_name: :CartItem

        
    ##SPIRE

    def self.find_by_credentials(email, password)
        email = User.find_by(email: email)
        return email if email && email.is_password?(password)
        return nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
    
end

