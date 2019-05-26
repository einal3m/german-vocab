class Api::V1::TranslationsController < ApplicationController
  def index
    translations = Translation.where(user_id: index_params[:user_id]).map do |translation|
      {
        id: translation.id,
        word_id: translation.word_id,
        translation: translation.translation,
        example: translation.example,
        learnt: translation.learnt,
        level: translation.level,
        review_count: translation.review_count,
        last_review: translation.last_review
      }
    end

    render json: translations
  end

  def edit
    translation = Translation.where(user_id: user_id, word_id: word_id).first

    if translation
      render json: serialize_translation(translation)
    else
      render json: default_translation
    end
  end

  def review
    translations = Translation.where(user_id: 1).reject do |translation|
      translation.learnt
    end.map do |translation|
      {
        id: translation.id,
        german: translation.word.german,
        article: translation.word.article,
        plural: translation.word.plural,
        translation: translation.translation,
        example: translation.example,
      }
    end.sample(10)

    render json: translations
  end

  def progress
    progress = Translation.where(user_id: index_params[:user_id]).map do |translation|
      {
        id: translation.id,
        translation: translation.translation,
        learnt: translation.learnt,
        level: translation.level,
        review_count: translation.review_count,
        last_review: translation.last_review
      }
    end

    render json: progress
  end

  def create
    translation = Translation.new(translation_params)
  
    if translation.save
      render :json => serialize_translation(translation), :status => 201
    else
      render :json => { :errors => translation.errors.full_messages }, :status => 422
    end
  end

  def update
    translation = Translation.find(translation_params[:id])

    if translation.update_attributes(translation_params)
      render :json => serialize_translation(translation)
    else
      render :json => { :errors => translation.errors.full_messages }, :status => 422
    end
  end

  private

  def default_translation
    {
      user_id: user_id,
      word_id: word_id,
      translation: '',
      example: '',
      known: false
    }
  end

  def serialize_translation(translation)
    {
      id: translation.id,
      user_id: translation.user_id,
      word_id: translation.word_id,
      translation: translation.translation,
      example: translation.example,
      known: translation.known
    }
  end

  def user_id
    @user_id = index_params[:user_id]
  end

  def word_id
    @user_id = index_params[:word_id]
  end

  def translation_params
    params.require(:translation).permit(:id, :word_id, :user_id, :translation, :example, :known)
  end

  def index_params
  	params.permit(:user_id, :word_id)
  end
end
