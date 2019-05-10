class Api::V1::TranslationsController < ApplicationController
  def index
    if index_params[:word_id].nil?
      render json: Translation.where(user_id: index_params[:user_id])
    else
      render json: Translation.search(index_params[:word_id], 1)
    end
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

    puts '************************'
    puts 'update translation'
    puts translation
    puts translation_params
    puts '************************'

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
