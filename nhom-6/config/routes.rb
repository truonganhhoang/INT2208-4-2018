Rails.application.routes.draw do
  root 'static_pages#index'
  resources :categories, only: %i(show)
  resources :card_sets, only: %i(show)
  resources :collections, only: %i(show)
end
