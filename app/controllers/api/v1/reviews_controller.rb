class Api::V1::ReviewsController < ApplicationController
  def create
    translation_id = params[:translation_id]
    review = Review.create(translation_id: translation_id, correct: review_params[:correct])
    render json: review
  end

  private

  def review_params
    params.require(:review).permit(:correct)
  end
end
