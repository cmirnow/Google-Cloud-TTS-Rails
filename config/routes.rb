Rails.application.routes.draw do
  get 'sound/index'
  post 'sound/index'

  devise_for :admins, controllers: { registrations: "registrations"}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'sound#index'
end
