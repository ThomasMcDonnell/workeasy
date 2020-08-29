Rails.application.routes.draw do
  namespace :v1, defaults: {format: :json} do
    # Accounts
    namespace :accounts do
      resources :registrations,     only: %i[create]
      post      :sign_in,           to: "user_token#create"
      post      'password/forgot',  to: 'passwords#forgot'
      post      'password/reset',   to: 'passwords#reset'
    end
  end
end
