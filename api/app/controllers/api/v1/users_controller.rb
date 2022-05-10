# rubocop:disable all
class Api::V1::UsersController < ApplicationController
  def index
    render json: 'Hello'
  end
end
# rubocop:enable all
