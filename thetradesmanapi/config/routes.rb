Rails.application.routes.draw do

  devise_for :users

  namespace :admin do
      resources :users
      root to: "users#index"
    end
  
    #apipie

  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth'
    namespace :v1 do 
    end 
  end

end
