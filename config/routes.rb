Rails.application.routes.draw do
  
  resources :characters, only: [:index, :show, :create, :update, :destroy]
  resources :game_objects, only: [:index, :show, :create, :update, :destroy]
  resources :settings, only: [:show, :create, :update]
  resources :saved_games, only: [:index, :show, :create, :update, :destroy]
  resources :inventories, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "user_settings", to: "users#user_settings"
  get "saved_list", to: "users#saved_list"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
