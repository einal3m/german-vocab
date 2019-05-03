Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
	namespace :v1 do
	  resources :users, only: [:index, :create]
      resources :words, only: [:index, :show]
      resources :progresses, only: [:index]
    end
  end

  match '*path', to: 'pages#index', via: :all
end
