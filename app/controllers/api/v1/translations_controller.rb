class Api::V1::TranslationsController < ApplicationController
  def index
    if index_params[:word_id].nil?
      render json: Translation.where(user_id: index_params[:user_id])
    else
      render json: Translation.search(index_params[:word_id], 1)
    end
  end

  def review
    translations = Translation.where(learnt: false).order("RANDOM()").limit(10).map do |translation|
      {
        id: translation.id,
        german: translation.word.german,
        translation: translation.translation,
        example: translation.example,
      }
    end

    render json: translations
  end

  def progress
    progress = Translation.where(user_id: index_params[:user_id]).map do |translation|
      {
        id: translation.id,
        word_id: translation.word_id,
        german: translation.word.german,
        translation: translation.translation,
        learnt: translation.learnt,
        level: translation.level,
      }
    end

    render json: progress
  end

  def create
    translation = Translation.new(translation_params)
  
    if translation.save
      render :json => translation, :status => 201
    else
      render :json => { :errors => translation.errors.full_messages }, :status => 422
    end
  end

  def update
    translation = Translation.find(translation_params[:id])

    if translation.update_attributes(translation_params)
      render :json => translation
    else
      render :json => { :errors => translation.errors.full_messages }, :status => 422
    end
  end

  private

  def translation_params
    params.require(:translation).permit(:id, :word_id, :user_id, :translation, :example, :seen, :learnt, :count)
  end

  def index_params
  	params.permit(:user_id, :word_id)
  end
end
