class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.create(name: params[:name])
    render json: user
  end

  private

  def create_params
    params.permit(:name)
  end
end
