class Api::V1::WordsController < ApplicationController
  def index
    render json: Word.search(index_params[:search])
  end

  private

  def index_params
    params.permit(:search)
  end
end
