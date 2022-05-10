# frozen_string_literal: true

module Api
  module V1
    module Users
      class RegistrationsController < ApplicationController
        def create
          user = User.new(user_params)
          if user.save
            render json: user, status: :created
          else
            render json: user.errors.full_messages, status: :bad_request
          end
        end

        private

        def user_params
          params.require(:user).permit(:avatar_url, :email, :nickname, :uid)
        end
      end
    end
  end
end
