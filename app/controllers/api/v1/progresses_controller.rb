class Api::V1::ProgressesController < ApplicationController
  def index
    render json: Progress.search(index_params[:word_id], 4)
  end

  private

  def index_params
  	params.permit(:word_id)
  end
end
