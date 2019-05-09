class Api::V1::ReviewsController < ApplicationController
  def create
    progress_id = params[:progress_id]
    review = Review.create(progress_id: progress_id, correct: review_params[:correct])
    render json: review
  end

  private

  def review_params
    params.require(:review).permit(:correct)
  end
end
