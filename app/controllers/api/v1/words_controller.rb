class Api::V1::WordsController < ApplicationController
  def index
    render json: Word.search(index_params[:search])
  end

  def show
  	render json: Word.find(show_params[:id])
  end

  private

  def show_params
  	params.permit(:id)
  end

  def index_params
    params.permit(:search)
  end
end
