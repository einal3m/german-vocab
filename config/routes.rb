Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      resources :words, only: [:index, :show]
      resources :translations, only: [:index, :create, :update] do
        resources :reviews, only: [:create]
        collection do
          get 'progress'
          get 'review'
        end
      end
    end
  end

  match '*path', to: 'pages#index', via: :all
end
