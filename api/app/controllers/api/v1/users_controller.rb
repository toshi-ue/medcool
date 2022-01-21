# frozen_string_literal: true

class Api::V1::UsersController < ApplicationController
  def index
    render json: 'Hello'
  end
end
